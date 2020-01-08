<template>
    <div>
        <h1>聊天列表</h1>
        <div class="chartCom">
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
            <chart-com></chart-com>
        </div>
    </div>
</template>
<script>
    import chartCom from './chartCom'

    export default {
        data() {
            return {
                list: [],
                loading: false,
                finished: false
            }
        },
        components: {
            chartCom
        },
        methods: {
            onLoad() {
                setTimeout(() => {
                    for (let i = 0; i < 10; i++) {
                        this.list.push(this.list.length + 1);
                    }
                    this.loading = false;
                    if (this.list.length >= 40) {
                        this.finished = true;
                    }
                }, 500);
            }
        }
    }
</script>
<style lang="scss">
    .chartCom {
        .van-cell {
            padding-top: 5px;
            padding-bottom: 5px;

            &:not(:last-child)::after {
                border: none;
            }
        }
        .van-panel__content {
            padding-bottom: 10px;
        }
    }
</style>