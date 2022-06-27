<template>
	<view>
		<view class="top">
			<text>箭头</text>
			<text>{{ tiem }}</text>
		</view>
		<view class="test">
			<view class="num">
				16-
				<text class="answer"></text>
				=7
			</view>
			<view class="info">十几减9</view>
		</view>
		<view class="number">
			<view class="left"></view>
			<view class="right">
				<view></view>
				<view></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tiem: '00:00'
		};
	},

	onLoad() {
		//定时器
		let n = 0;
		let m = '00';
		setInterval(() => {
			n = +n + 1;
			//获取分
			if (+n < 10) {
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
	}
};
</script>

<style lang="scss">
.test {
	.num {
		.answer {
		}
	}
	.info {
	}
}
.number {
	.left {
	}
	.right {
	}
}
</style>
