<template>
	<view>
		<view class="top">
			<view class="left">
				<image class="avata" src="https://fly-1312367974.cos.ap-nanjing.myqcloud.com/11.png"></image>
				<view class="info">
					<view>微信用户</view>
					<view class="classname" @click="onClickShow">{{ classname }}</view>
					<van-overlay :show="show">
						<view class="wrapper">
							<view class="block" catch:tap="noop">
								<view class="tt">
									<text class="set" @click="classname1 = '暂不设置'">暂不设置</text>
									<text class="chooseclass">选择年级</text>
								</view>
								<view class="classbody">
									<view class="tp">
										<text :class="classname1 === '一年级' ? 'active' : ''" @click="close('一')">
											一年级
										</text>
										<text :class="classname1 === '二年级' ? 'active' : ''" @click="close('二')">
											二年级
										</text>
										<text :class="classname1 === '三年级' ? 'active' : ''" @click="close('三')">
											三年级
										</text>
									</view>
									<view class="botm">
										<text :class="classname1 === '四年级' ? 'active' : ''" @click="close('四')">
											四年级
										</text>
										<text :class="classname1 === '五年级' ? 'active' : ''" @click="close('五')">
											五年级
										</text>
										<text :class="classname1 === '六年级' ? 'active' : ''" @click="close('六')">
											六年级
										</text>
									</view>
								</view>
								<view class="cel">
									<van-button type="info" round size="large" @click="hiden">确定</van-button>
								</view>
							</view>
						</view>
					</van-overlay>
				</view>
			</view>
			<view class="right">
				<view class="history">
					<uni-icons type="settings" size="30" color="blue"></uni-icons>
					<text>历史记录</text>
				</view>

				<view class="fankui">
					<uni-icons type="mail-open-filled" size="30" color="red"></uni-icons>
					<text>反馈</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			Istrue: 'off',
			classname1: '一年级',
			show: false
		};
	},
	onLoad() {},
	computed: {
		...mapState('Class', ['classname'])
	},
	methods: {
		close(data) {
			this.classname1 = data + '年级';
		},
		onClickShow() {
			uni.hideTabBar();
			this.show = true;
		},
		hiden() {
			uni.showTabBar();
			this.show = false;
			this.$store.commit('Class/changeclassname', this.classname1);
		}
	}
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
</style>
