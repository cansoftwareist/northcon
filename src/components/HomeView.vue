<template>
    <div class="homeview">
        <div class="test" v-if="this.checkViewPortSize()">
            {{ this.checkViewPortSize()}}
            client height: {{ this.screenArea.viewPortHeight }} <br>
            client width: {{ this.screenArea.viewPortWidth }} <br>
            screen height: {{ this.screenArea.screenHeight}} <br>
            screen width: {{ this.screenArea.screenWidth }} <br>
        </div>
        <div class="homepart1" :style="this.getHomePart1Style">
            <div class="homepart1-column homepart1-text-part homepart1-text1 home-text">
                We build bespoke cold rooms and <br>
                provide refrigeration systems solutions.
            </div>
            <div class="homepart1-column homepart1-buttonPart">
                <button class="homepart1-button btn btn-primary rounded-pill homepart1-button1">
                    <div class="homepart1-button-text home-text">Free Quote</div>      
                </button>
                <button class="homepart1-button btn btn-primary rounded-pill homepart1-button2">
                    <div class="homepart1-button-text home-text">Learn More</div>
                </button>
            </div>
            <div class="homepart1-column homepart1-text-part homepart1-text2 home-text">
                Our services include bespoke cold room projects & design,<br>
                cold room installation and disassembly, service, maintenance and after-sales support.
            </div>
        </div>
        <div class="homepart2">
            <div class="homepart2-logopart">
                <img src="@/assets/home/homepart2/logos/logo1.png" alt="">
                <img src="@/assets/home/homepart2/logos/logo2.png" alt="">
                <img src="@/assets/home/homepart2/logos/logo3.png" alt="">
                <img src="@/assets/home/homepart2/logos/logo4.png" alt="">
                <img src="@/assets/home/homepart2/logos/logo5.png" alt="">
                <img src="@/assets/home/homepart2/logos/logo6.png" alt="">
            </div>
            <div class="homepart2-text home-text">
                All of our work is of a professional standard, follows latest health & safety regulations and certifications. 
            </div>
        </div>
    </div>
</template>
  
<script>
    import textFit from 'textfit'
    export default {
        name: 'HomeView',
        data() {
            return {
                screenArea: {
                    viewPortHeight: undefined,
                    viewPortWidth: undefined,
                    screenHeight: undefined,
                    screenWidth: undefined
                },
                homepart1HightPercentage: 85,
                homepart2HightPercentage: 40,
            }
        },
        created() {
            this.calculateViewPort();
        },
        mounted() {
            if (this.screenArea.screenWidth>150) {
                textFit(document.getElementsByClassName('home-text'))
            }
            window.addEventListener('resize', () => {
                if (typeof document.documentElement != 'undefined'
                    && typeof document.documentElement.clientWidth != 'undefined'
                    && document.documentElement.clientWidth != 0) 
                {
                    this.calculateViewPort();
                    if (this.screenArea.screenWidth>150) {
                        textFit(document.getElementsByClassName('home-text'))
                    }
                }
            })
        },
        computed: {
            homepart1Area() {
                return {height: this.screenArea.screenHeight*this.homepart1HightPercentage/100, width: this.screenArea.clientWidth}
            },
            homepart2Area() {
                return {height: this.screenArea.screenHeight*this.homepart2HightPercentage/100, width: this.screenArea.clientWidth}
            },
            getHomePart1Style() {
                let area = this.homepart1Area
                return {'height': `${area.height}px`, 'width': `${area.width}px`}
            },
            getHomePart2Style() {
                let area = this.homepart2Area
                return {'height': `${area.height}px`, 'width': `${area.width}px`}
            }
        },
        methods: {
            calculateViewPort: function() {
                this.screenArea.viewPortHeight = document.documentElement.clientHeight;
                this.screenArea.viewPortWidth = document.documentElement.clientWidth;
                this.screenArea.screenHeight = screen.availHeight;
                this.screenArea.screenWidth = screen.availWidth;
            },
            checkViewPortSize: function(){
                return (this.screenArea.screenHeight && this.screenArea.screenWidth && this.screenArea.viewPortHeight && this.screenArea.viewPortWidth) ?
                true : false;
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '@/styles.scss';

.homepart1 {
    background-image: url('@/assets/home/homepart1/1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    filter: brightness(90%);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    overflow: hidden;
}

.homepart1-text1 {
    height: 40%;
}
.homepart1-text2 {
    height: 30%;
}
.homepart1-column {
    padding-left: 5%;
}
.homepart1-buttonPart {
    display: flex;
    justify-content: baseline;
    padding-left: 0%;
    height: 8%;
    justify-content: space-evenly;
}
.homepart1-button{
    display: flex;
    align-items: center;
    overflow: hidden;
}
.homepart1-button1 {
    background: $homepart1button1-color;
}
.homepart1-button2 {
    background: $homepart1button2-color;
}
.homepart1-button-text {
    color: $homepart1button-fontcolor;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 90%;
    width: 100%;

}
.homepart1-text-part{
    text-align: left;
    color: $homepart1-text-part-color;
}

.homepart2 {
    display: flex;
    flex-direction: column;
}
.homepart2-logopart {
    height: 80%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.homepart2-logopart img {
    flex: 0 0 180px;
    margin: 1%;
}

.homepart2-text {
    padding-left: 5%;
    height: 80px;
    color: $homepart2-text-part-color;
}

@include xm {
    .homepart1 {
        row-gap: 2%;
    }
    .homepart1-text1 {
        height: 35%;
    }
    .homepart1-text2 {
        height: 35%;
    }
    .homepart1-buttonPart{
        height: 12%;
        justify-content: flex-start;
        column-gap: 2%;
        padding: 1%;
    }
    .homepart1-button{
        width: 48%;
        justify-content: center;
    }
    .homepart1-button-text {
        height: 90%;
    }
}
@include sm{
    .homepart1-text1 {
        height: 30%;
    }
    .homepart1-text2 {
        height: 20%;
    }
    .homepart1-buttonPart{
        height: 10%;
        justify-content: flex-start;
        column-gap: 8%;
        padding: 0%;
    }
    .homepart1-button{
        width: 30%;
        justify-content: center;
    }
    .homepart1-button-text {
        height: 90%;
        width: 80%;
    }
    .homepart1-column {
        padding-left: 12%;
    }

    .homepart2-text {
        padding-left: 12%;
    }
}
@include md {
}
@include lg {
}
@include xl {  
    .homepart1 {
        row-gap: 8%;
    }
    .homepart1-text1 {
        height: 30%;
    }
    .homepart1-text2 {
        height: 20%;
    }
    .homepart1-buttonPart{
        height: 12%;
        justify-content: flex-start;
        column-gap: 8%;
        padding: 0%;
    }
    .homepart1-button{
        width: 20%;
        justify-content: center;
    }
    .homepart1-button-text {
        height: 95%;
        width: 80%;
    }
    .homepart1-column {
        padding-left: 12%;
    }
}
</style>  