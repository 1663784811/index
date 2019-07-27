<template>

    <div class="indexStudy">
        <div class="container">
            <h2 class="studyTitle">学习交流</h2>
            <div class="studySearch">
                <input type="text">
                <span class="searchBtn"><Button size="large" type="primary" shape="circle"
                                                icon="ios-search"></Button></span>

            </div>
            <p class="searchNote">提示...</p>
        </div>
    </div>


</template>

<script>
    export default {
        name: "IndexStudy"
    }
</script>

<style scoped lang="stylus">
    .indexStudy
        background: #ECF3FC;
        height: 445px;
        padding: 50px 0;
        min-width: 1200px;

        .studyTitle
            text-align: center;
            color: #202020;
            font-size: 42px;
            font-weight: normal;
            margin-top: 60px;

        .studySearch
            width: 338px;
            margin: auto;
            padding: 30px 0;
            position: relative;

            input
                width: 100%;
                height: 42px;
                border-radius: 20px;
                outline: 0;
                text-indent: 20px;
                font-size: 18px;
                background: none;
                border: 1px solid #D1D1D1;
                padding-right: 50px;

        .searchBtn
            position: absolute;
            top: 33px;
            right: 4px;

        .searchNote
            text-align: center;
            font-size: 14px;
            color: #999;

</style>
