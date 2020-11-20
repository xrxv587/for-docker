<template>
	<div class="login">
		<div class="login-panel">
			<el-form inline label-position="left">
				<el-form-item>
					<el-input placeholder="input account"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="password" placeholder="input password"></el-input>
				</el-form-item>
				<div class="submit">
					<el-button type="primary">进 入</el-button>
				</div>
			</el-form>
		</div>
	</div>
</template>
<style scoped lang="less">
	.login {
		width: 100%;
		min-height: 100%;
		box-sizing: border-box;
		padding-top: 100px;
		// background-color: rgb(72, 50, 135);
		.login-panel {
			width: 260px;
			margin: auto;
			.el-form-item {
				margin-right: 0;
				margin-bottom: 10px;
				.el-input {
					width: 260px;
				}
			}
			.submit {
				margin-top: 20px;
				width: 100%;
				.el-button {
					width: 260px;
					background-color: rgb(250, 240, 94);
					border-color: rgb(250, 240, 94);
					color: rgb(72, 50, 135);
				}
			}
		}
	}
</style>