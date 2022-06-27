<template>
	<view class="">
		<Main />
		<van-tabs :active="active">
			<van-tab title="AI智能练习" title-style="font-weight:bold;font-size: 40rpx">
				<view class="banner">
					<image src="../../static/static/uploads/banner1.png" mode=""></image>
					<text style="font-size: 45rpx;">用人工智能搞笑提升口算能力</text>
					<text style="font-size: 30rpx;font-weight: normal;color: #999;margin: 20rpx 0;">
						自动匹配学习进度,智能识别薄弱环节
					</text>
					<van-button type="info" round size="large" @click="fast">立即口算</van-button>
					<text style="color:#f8c36c ;font-size: 20rpx;">已有4403182人使用AI智能练习</text>
				</view>
			</van-tab>
			<van-tab title="知识点练习" title-style="font-weight:bold;font-size: 40rpx">内容 2</van-tab>
		</van-tabs>
	</view>
</template>

<script>
import Main from '@/components/main.vue';
export default {
	components: {
		Main
	},
	methods: {
		fast() {
			uni.navigateTo({
				url: '../../mouse/index'
			});
		}
	}
};
</script>

<style lang="scss">
van-tab {
	z-index: 0 !important;
	font-size: 12rpx;
	font-weight: 700;

	.banner {
		padding: 200rpx 50rpx;
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		align-items: center;
		image {
			width: 200rpx;
			height: 200rpx;
			border-radius: 100rpx;
			margin: 50rpx 0 20rpx 0;
		}
		van-button {
			margin: 20rpx 0;
			width: 80%;
		}
	}
}
</style>
