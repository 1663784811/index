<template>

    <div class="articleBox">
        <div class="container">
            <div class="articleRight">
                <div class="articleImg">
                    <img src="../../assets/hom/img/sys.jpg"/>
                </div>
                <div class="articleTextBox">
                    <h2 class="articleTitle textOne">服务器集群</h2>
                    <div class="articleContent">
                        <p>
                            集群(Cluster)是由两台或多台节点机(服务器)构成的一种松散耦合的计算节点集合，为用户提供网络服务或应用程序(包括数据库、Web服务和文件服务等)的单一客户视图，同时提供接近容错机的故障恢复能力。集群系统一般通过两台或多台节点服务器系统通过相应的硬件及软件互连，每个群集节点都是运行其自己进程的独立服务器。这些进程可以彼此通信，对网络客户机来说就像是形成了一个单一系统，协同起来向用户提供应用程序、系统资源和数据。除了作为单一系统提供服务，集群系统还具有恢复服务器级故障的能力。</p>
                    </div>
                    <p class="articleAuthor textOne">why</p>
                </div>

            </div>
            <div class="articleLeft">
                <div class="articleTextBox">
                    <h2 class="articleTitle textOne">分布式系统</h2>
                    <div class="articleContent">
                        <p>
                            在一个分布式系统中，一组独立的计算机展现给用户的是一个统一的整体，就好像是一个系统似的。系统拥有多种通用的物理和逻辑资源，可以动态的分配任务，分散的物理和逻辑资源通过计算机网络实现信息交换。系统中存在一个以全局的方式管理计算机资源的分布式操作系统。通常，对用户来说，分布式系统只有一个模型或范型。在操作系统之上有一层软件中间件（middleware）负责实现这个模型。一个著名的分布式系统的例子是万维网（World
                            Wide Web），在万维网中，所有的一切看起来就好像是一个文档（Web页面）一样。</p>
                    </div>
                    <p class="articleAuthor textOne">why</p>
                </div>
                <div class="articleImg">
                    <div class="imgBox">
                        <img src="../../assets/hom/img/server.jpg" height="550" width="850"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ArticleBox"
    }
</script>

<style scoped lang="stylus">
    .articleBox
        .articleRight
            position: relative;
            margin-bottom: 60px;
            padding: 20px;

            .articleImg
                position: absolute;
                width: 570px;
                height: 392px;
                top: 0;
                left: 0;
                background: #fff;
                text-align: center;
                border: 1px solid #eee;

                img
                    height: 100%;

            .articleTextBox
                height: 350px;
                background: #fff;
                padding: 20px 20px 20px 570px;
                box-shadow: 2px 2px 2px #eee;
                border: 1px solid #eee;
                border-radius: 4px;

                .articleTitle
                    font-size: 24px;
                    color: #202020;
                    font-weight: normal;
                    padding: 30px 0;

                .articleContent
                    height: 180px;
                    overflow: hidden;
                    text-overflow ellipsis;

                    p
                        font-size: 12px;
                        color: #5F5F5F;
                        line-height: 30px;

                .articleAuthor
                    font-size: 14px;
                    color: #32AEF5;
                    position relative;
                    padding: 6px;

                .articleAuthor:after
                    content: "";
                    border: 1px solid #32AEF5;
                    position: absolute;
                    bottom: 0;
                    left 0;
                    width: 100px;


        .articleLeft
            position: relative;
            margin-bottom: 60px;
            padding: 20px;

            .articleImg
                position: absolute;
                width: 570px;
                height: 392px;
                background: #fff;
                top: 0;
                right: 0;
                border: 1px solid #eee;

                img
                    height: 100%;

            .articleTextBox
                height: 350px;
                background: #fff;
                padding: 20px 570px 20px 20px;
                box-shadow: -2px 2px 2px #eee;
                border: 1px solid #eee;
                border-radius: 4px;

                .articleTitle
                    font-size: 24px;
                    color: #202020;
                    font-weight: normal;
                    padding: 30px 0;
                    text-align: right;

                .articleContent
                    height: 180px;
                    overflow: hidden;
                    text-overflow ellipsis;
                    text-align: right;

                    p
                        font-size: 12px;
                        color: #5F5F5F;
                        line-height: 30px;

                .articleAuthor
                    font-size: 14px;
                    color: #32AEF5;
                    position relative;
                    padding: 6px;
                    text-align: right;

                .articleAuthor:after
                    content: "";
                    border: 1px solid #32AEF5;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 100px;

</style>
