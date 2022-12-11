<template>
    <div class="divimage" :style="this.getDivImageStyle" >
        <div class="divimageFrame" :style="this.getDivImageFrameStyle">
            <div v-if="this.firstTextPayload" class="text-part firstTextPart" :style="this.getFirstTextPartStyle">
                <slot name="firstText"></slot>
            </div>
            <div class="buttonPart" :style="this.getButtonPartStyle">
                <slot name="buttons"></slot>
            </div>
            <div v-if="this.secondTextPayload" class="text-part secondTextPart" :style="this.getSecondTextPartStyle">
                <slot name="secondText"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import textFit from 'textfit'
    export default {
        name: 'DivImage',
        props: [
            "heightPercentage",
            "widthPercentage",
            "firstTextPayload",
            "secondTextPayload",
            "backgroundImage",
            "buttonPartPayload",
            "padding",
            "row-gap",
            "text-align",
            "justify-content",
            "framePayload",
            "marginTop",
            "marginLeft",
        ],
        data() {
            return {
                viewPortHeight: 0,
                viewPortWidth: 0,
                publicPath: process.env.BASE_URL,
            }
        },
        computed: {
            getDivImageWidth() {
                return (this.viewPortWidth/100)*this.widthPercentage
            },
            getDivImageHeight() {
                return (this.viewPortHeight/100)*this.heightPercentage
            },
            getFrameWidth() {
                return ((this.viewPortWidth/100)*this.widthPercentage) - this.framePayload.padding
            },
            getFrameHeight() {
                return ((this.viewPortHeight/100)*this.heightPercentage) - this.framePayload.padding
            },
            getDivImageStyle() {
                let divImageDict = {}
                if (this.heightPercentage) {
                    divImageDict['height']=this.getSizePx(this.getDivImageHeight)
                }
                if (this.widthPercentage) {
                    divImageDict['width']=this.getSizePx(this.getDivImageWidth) 
                }
                if (this.backgroundImage) {
                    const imageLocation = `${this.publicPath}images/${this.backgroundImage}`
                    divImageDict['background-image'] = `url('${imageLocation}')`
                    divImageDict['background-repeat'] = 'no-repeat'

                    divImageDict['background-size'] = `${divImageDict['width']} ${divImageDict['height']}`
                }
                if (this.marginLeft) {
                    divImageDict['margin-left'] = `${this.marginLeft}px`
                }

                if (this.marginTop) {
                    divImageDict['margin-top'] = `${this.marginTop}px`
                }
                if (this.padding) {
                    divImageDict['padding'] = `${this.padding}px`
                }
                return divImageDict
            },
            getDivImageFrameStyle() {
                let divImageFrameDict = {}
                if (this.heightPercentage) {
                    divImageFrameDict['height']=this.getSizePx(this.getFrameHeight)
                }
                if (this.widthPercentage) {
                    divImageFrameDict['width']=this.getSizePx(this.getFrameWidth)
                }
                if (this.framePayload) {
                    divImageFrameDict['border-radius'] = this.getSizePx(this.framePayload.borderRadius)
                    divImageFrameDict['border'] = `${this.getSizePx(this.framePayload.borderSize)} solid ${this.getBorderColor}`
                }

                if (this['row-gap']) {
                    divImageFrameDict['row-gap'] = `${this['row-gap']}px`
                }
                return divImageFrameDict
            },
            getBorderColor() {
                return this.framePayload.visible ? '#FFFFFF' : 'transparent'
            },
            getFirstTextPartStyle() {
                let res = {}
                if (this.firstTextPayload) {
                    const { heightPercentage, fontWeight, fontColor } = this.firstTextPayload
                    let modifiedHeight = this.getSizePx(this.getPartHeight(heightPercentage))
                    let modifiedWidth = this.getSizePx(this.getPartWidth())
                    res = { 'width': modifiedWidth, 'height': modifiedHeight, 'font-weight': fontWeight, 'color': fontColor,
                     'padding-left': `${this.framePayload.paddingInner}px` }
                }
                return res
            },

            getSecondTextPartStyle() {
                let res = {}
                if (this.secondTextPayload) {
                    const { heightPercentage, fontWeight, fontColor } = this.secondTextPayload
                    let modifiedHeight = this.getSizePx(this.getPartHeight(heightPercentage))
                    let modifiedWidth = this.getSizePx(this.getPartWidth())
                    res = { 'width': modifiedWidth, 'height': modifiedHeight, 'font-weight': fontWeight, 'color': fontColor,
                    'padding-left': `${this.framePayload.paddingInner}px` }
                }
                return res
            },

            getButtonPartStyle() {
                let res = {}
                if (this.buttonPartPayload) {
                    const { heightPercentage }  = this.buttonPartPayload
                    let modifiedHeight = this.getSizePx(this.getPartHeight(heightPercentage))
                    let modifiedWidth = this.getSizePx(this.getPartWidth())
                    res = {'width': modifiedWidth, 'height': modifiedHeight, 'padding-left': `${this.framePayload.paddingInner}px`,
                        'column-gap': `${this.buttonPartPayload.columnGap}%`
                    }
                }
                return res
            }
        },
        created() {
            this.calculateViewPort()
        },
        mounted() {
            this.modifyButtonSize()
            textFit(document.getElementsByClassName('text-part'))
            textFit(document.getElementsByClassName('btn-text'))
            window.addEventListener('resize', () => {
                if (typeof document.documentElement != 'undefined'
                    && typeof document.documentElement.clientWidth != 'undefined'
                    && document.documentElement.clientWidth != 0) 
                {
                    this.refreshViewPortWidth()  
                    this.modifyButtonSize()
                    textFit(document.getElementsByClassName('text-part'))
                    textFit(document.getElementsByClassName('btn-text'))
                    
                }
            })

        },
        methods: {
            calculateViewPort: function() {
                this.viewPortHeight = document.documentElement.clientHeight;
                this.viewPortWidth = document.documentElement.clientWidth;
            },
            refreshViewPortWidth: function() {
                this.viewPortWidth = document.documentElement.clientWidth;
            },
            getPartnum: function() {
                let partnum = 0
                if (this.firstTextPayload) {
                    partnum++
                }
                if (this.secondTextPayload) {
                    partnum++
                }
                if (this.buttonPartPayload) {
                    partnum++
                }
                return partnum === 0 ? 1 : partnum
            },
            getSizePx: function(value) {
                return value.toString() + 'px'
            },
            getPartHeight: function(heightPercentage) {
                return (this.getFrameHeight/(100*this.getPartnum()))*heightPercentage
            },
            getPartWidth: function() {
                return this.getFrameWidth - 2*this.framePayload.borderSize
            },
            modifyButtonSize: function() {
                for (let item of document.getElementsByClassName('div-image-button')) {
                    console.log(item)
                    item.style.width = this.buttonPartPayload.stable ? 
                    `${this.buttonPartPayload.buttonWidth}px` : `${this.getPartWidth()/this.buttonPartPayload.buttonWidth}px`
                    item.children[0].style.width = item.style.width
                    console.log(item.style.width)
                    if (this.buttonPartPayload) {
                        let itemHeight = this.getPartHeight(this.buttonPartPayload.heightPercentage)/this.buttonPartPayload.buttonHeight
                        item.style.height = `${itemHeight}px`
                        console.log(item.style.height)
                        item.children[0].style.height = `${itemHeight-this.buttonPartPayload.buttonTextHeight}px`
                        
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.divimage {
    //background: blue;
    display: flex;
    justify-content: center;
    align-items: center;
}

.divimageFrame {
    //background: green;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.firstTextPart {
    //background: yellow;
}

.secondTextPart {
    //background: red;
}

.text-part {
    text-align: left;
    overflow: hidden;
}

.div-image-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.buttonPart {
    //background: white;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: center;
}
.btn-text {
    //background: black;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>