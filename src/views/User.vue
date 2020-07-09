<template>
    <div>
        <nav-bar></nav-bar>
        <user-info :btnTitle="btnTitle"></user-info>
    </div>
</template>

<script>
import NavBar from '@/components/navbar/DefaultNavBar.vue';
import UserInfo from '@/components/pancel/UserInfo.vue';
export default {
    data() {
        return {
            btnTitle: '编辑资料'
        }
    },
    components: {
        NavBar,
        UserInfo
    }
}
</script>

<style>

</style>