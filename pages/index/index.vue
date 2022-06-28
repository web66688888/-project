<template>
	<view>
		<Main></Main>
		<view class="cotent">
			<view class="text">作业检查</view>
			<image src="../../static/logo.png" class="pic" @click="openCamera"></image>
			<!-- <camera mode="normal" :flash="Istrue"></camera> -->
			<button class="friends" open-type="share">推荐朋友</button>
		</view>
	</view>
</template>

<script>
import Main from '@/components/main.vue';
import { mapState } from 'vuex';
export default {
	components: {
		Main
	},
	data() {
		return {};
	},
	onLoad() {},
	computed: {},
	methods: {}
};
</script>

<style scoped lang="scss">
.wrapper {
	position: relative;
	display: flex;
	height: 100%;
	z-index: 99;
}

.block {
	.cel {
		padding: 20rpx;
	}
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 20rpx;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40%;
	background-color: #fff;
	z-index: 99;
	.classbody {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text {
			font-weight: normal;
			margin-top: 30rpx;
			border: 1rpx solid transparent;
			text-align: center;
			padding: 10rpx 20rpx;
			border-radius: 50rpx;
			background-color: #f7f9fa;
		}
		.active {
			background-color: #ecf6ff;
			color: #369fff;
		}
		.tp {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-evenly;
		}
		.botm {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-evenly;
		}
	}
	.tt {
		position: relative;
		padding: 20rpx 20rpx;
		display: flex;
		.set {
			margin-top: 10rpx;
			position: absolute;
			font-weight: normal;
			color: #999;
			font-size: 20rpx;
			text-align: center;
		}
		.chooseclass {
			flex: 1;
			font-size: 30rpx;
			text-align: center;
		}
	}
}

.top {
	padding: 0 35rpx;
	display: flex;
	display: flex;
	align-items: center;
	justify-content: space-between;
	.right {
		display: flex;
		.history {
			margin-right: 35rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.fankui {
			display: flex;
			flex-direction: column;
		}
	}
	.left {
		display: flex;
		.info {
			margin-left: 20rpx;
			font-weight: bold;
			.classname {
				margin-top: 5rpx;
				font-weight: normal;
				display: inline-block;
			}
		}
		.avata {
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
		}
	}
}
.cotent {
	margin-top: 300rpx;
	position: relative;
	.friends {
		border: 0;
		bottom: -600rpx;
		border-radius: 50rpx;
		left: 72%;
		transform: translateX(-250rpx);
		position: absolute;
		&::after {
			border: 0;
		}
	}
	.text {
		bottom: -400rpx;
		left: 72%;
		transform: translateX(-250rpx);
		position: absolute;
		// z-index: 2;
	}
	.pic {
		left: 50%;
		transform: translateX(-250rpx);
		position: absolute;
		width: 500rpx;
		height: 500rpx;
		border-radius: 50%;
	}
}
</style>
