<template>
    <div class="nav-bar">
        <a href="/">
            <img src="@/assets/images/icons/bilibili.png">
        </a>
        <div class="nav-bar-right">
            <a href="" class="search_parent">
                <van-icon class="search" name="search" />
            </a>
            <a class="user-img" href="/user">
                <img src="@/assets/images/icons/noface.jpg@48w_48h_1c.jpg">
            </a>
            <button>下载App</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
    .nav-bar{
        height: 11.73333vw;
        display: flex;
        justify-content:space-between;
        align-items: center;
        padding: 0 4.167vw;
        .nav-bar-right{
            width: 44.444vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .search{
                font-size: 7.778vw;
                color: #ccc;
                position: relative;
                line-height: 9.722vw;
            }
            .search_parent{
                height: 7.5vw;
                overflow: hidden;
            }
            .user-img{
                width: 6.667vw;
                height: 6.667vw;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 6.667vw;
                }
            }
            button{
                border: none;
                height: 6.667vw;
                width: 22.222vw;
                font-size: 3.889vw;
                background-color: #fb7299;
                color: #fff;
                border-radius: 0.833vw;
            }
        }
    }
</style>