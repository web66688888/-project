<template>
	<view class="container">
		<van-overlay :show="show">
			<view class="wrapper">
				<view class="block">
					<view style="font-weight: bold;font-size: 30rpx;">要离开嘛?</view>
					<view style="color: #999;">退出练习后将不保留答题记录哦</view>
					<view class="btn">
						<van-button type="default" round size="normal" @click="back">退出练习</van-button>
						<van-button style="margin-left: 20rpx;" type="info" round size="normal" @click="Continue">
							继续练习
						</van-button>
					</view>
				</view>
			</view>
		</van-overlay>
		<view class="top">
			<uni-icons type="left" size="20" @click="showMask"></uni-icons>
			<text class="tiem">{{ tiem }}</text>
		</view>
		<view class="test">
			<view class="num">
				<text>{{ num1 }}</text>
				<text>{{ fuhao }}</text>
				<text>{{ num2 }}</text>
				=
				<text class="answer">{{ answer }}</text>
			</view>
			<view class="info">十几减9</view>
		</view>
		<view class="number">
			<view class="left">
				<view class="arr">
					<view v-for="(item, index) in arr" :key="index" @click="num">{{ item }}</view>
				</view>
				<view class="botm">
					<view class="" @click="num">0</view>
					<view class="" @click="point">.</view>
				</view>
			</view>
			<view class="right">
				<view @click="del">X</view>
				<view @click="sure">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			answer: 0,
			num1: 0,
			num2: 8,
			fuhao: '+',
			tiem: '00:00',
			show: false,
			arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
		};
	},
	computed: {
		...mapState('Class', ['classname'])
	},
	onLoad() {
		//定时器
		let n = 0;
		let m = '00';
		setInterval(() => {
			n++;
			//获取分
			if (n < 10) {
				n = '0' + n;
			}
			if (n == 60 && +m < 10) {
				n = '00';
				m = '0' + (+m + 1);
			}
			if (m >= 10) {
				m = +m;
			}
			this.tiem = m + ':' + n;
		}, 1000);
	},
	methods: {
		point() {},
		num() {},
		sure() {},
		del() {},
		back() {
			uni.navigateBack();
		},
		Continue() {
			this.show = false;
		},
		showMask() {
			this.show = true;
		}
	}
};
</script>

<style lang="scss">
page {
	// position: relative;
	height: 100%;
	background-color: #f1f6fc;
	padding: 10rpx 20rpx;
	.container {
		height: 100%;
		position: relative;
	}
}
.tiem {
	display: inline-block;
	color: blue;
	background-color: #fff;
	width: 100rpx;
	height: 50rpx;
	line-height: 50rpx;
	text-align: center;
	border-radius: 50rpx;
}
.wrapper {
	position: relative;
	display: flex;
	height: 100%;
	z-index: 99;
}
.block {
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-evenly;
	border-radius: 20rpx;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 40%;
	background-color: #fff;
	z-index: 99;
	.btn {
		display: flex;
		justify-content: space-between;
	}
}
.test {
	position: absolute;
	top: 250rpx;
	width: 90%;
	height: 200rpx;
	border-radius: 20rpx;
	text-align: center;
	line-height: 200rpx;
	background-color: #3099f6;
	color: #fff;
	font-size: 50rpx;
	z-index: 999;
	.num {
		.answer {
		}
	}
	.info {
		position: absolute;
		margin-left: 40rpx;
		bottom: -100rpx;
		background-color: #fff;
		color: #999;
		font-size: 30rpx;
		border-radius: 0 0 20rpx 20rpx;
		width: 90%;
		height: 100rpx;
		text-align: center;
		line-height: 100rpx;
	}
}
.number {
	display: flex;
	height: 30%;
	position: absolute;
	bottom: 0;
	justify-content: space-between;
	.left {
		width: 60%;
		.arr {
			display: flex;
			flex-wrap: wrap;
			view {
				margin-bottom: 10rpx;
				background-color: #fff;
				margin-right: 10rpx;
				border-radius: 5rpx;
				width: 130rpx;
				height: 60rpx;
				text-align: center;
			}
		}
	}
	.right {
		width: 20%;
	}
}
</style>
