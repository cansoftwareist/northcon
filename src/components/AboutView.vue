<template>
    <div class="about-part">
        <div class="about-part1 bg-image">
            <div v-resize-text="{ratio:2.0, delay: 10}" class="about-text-1">
                About Us.
            </div>
            <div class="about-text-2">
                <div v-resize-text="{ratio:6.0, delay: 10}">
                    NorthCon is a dynamic and emerging company creating temperature-controlled environment.
                </div>
                <div v-resize-text="{ratio:6.0, delay: 10}">
                    Our services include bespoke cold room projects and designs, assembly and full after-sales support.
                </div>
            </div>
            
        </div>
        <div class="header-lines"></div>
        <div class="about-part2">
            <div v-resize-text="{ratio:6.0, delay: 10}">
                With a drastic experience of over 20 years, we have been at the frontline of cold store manufacturing business with a devoted and a <br>
                highly experienced team with outstanding customer satisfaction. We master every aspect of installing, maintaining, and developing <br>
                cold rooms, from product design to comprehensive solutions. We prioritise delivering the best quality solutions with a well-studied <br>
                cost-effectiveness awareness. 
            </div>
            <div v-resize-text="{ratio:2.0, delay: 10}" class="about-text-3">
                We are...
            </div>
        </div>
        <div class="about-part3">
            <img class="about-item" src="@/assets/about/part2/1.png" alt="">
            <img class="about-item" src="@/assets/about/part2/2.png" alt="">
            <img class="about-item" src="@/assets/about/part2/3.png" alt="">
        </div>
        <div class="about-part4 bg-image">
            <div v-resize-text="{ratio:2.0, delay: 10}">
                Company Culture.
            </div>
            <div v-resize-text="{ratio:6.0, delay: 10}">
                NorthCon is an innovative, sustainable and a fast-developing company with a dynamic team. <br>
                We have a strict understanding of work ethics, customer networking and excellent relationships. <br>
                We gain power and motivation from our valuable team members.
            </div>
        </div>
        <div class="header-lines"></div>
        <div class="about-part5">
            <img class="test" src="@/assets/about/part4/1.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        name: 'AboutView'
    }
</script>
<style lang="scss">
@import '@/styles.scss';

.about-part {
    display: flex;
    flex-direction: column;
    
}

.about-part1 {
    display: inline;
    text-align: left;
    background-image: url('@/assets/about/part1/1.png');
    background-size: cover;
    height: 50vh;
    padding-left: 10%;
}

.about-part2 {
    display: inline;
    text-align: left;
    padding-left: 10%;
    margin-top: 5%;
}

.about-part3 {
    display: flex;
    justify-items: center;
    justify-content: center;
    padding-left: 10%;
    column-gap: 5%;
}

.about-part4 {
    display: inline;
    text-align: left;
    padding-left: 10%;
    margin-top: 5%;
    background-image: url('@/assets/about/part3/1.png');
    background-size: cover;
    height: 60vh;
    color: white;
}

.about-part5 {
    margin-top: 5%;
    height: 100%;
    width: 100%; 
    flex-basis: 50%;
    align-self: center;
}

.test {
    width: 100%;
}

.about-text-1 {
    margin-bottom: 100px;
}

.about-text-3 {
    text-align: center;
}

.about-item {
    width: 25%;
    height: 90%;
}

.header-lines {
    background: #2095D3;
    flex-basis: 20px;
}
</style>