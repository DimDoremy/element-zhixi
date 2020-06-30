<template>
	<el-form ref="form" :model="form" label-width="120px">
		<el-form-item label="Openid">
			<el-input v-model="form.openid" disabled></el-input>
		</el-form-item>
		<el-form-item label="轩辕剑碎片">
			<el-slider v-model="form.xuanyuanjian" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="东皇钟碎片">
			<el-slider v-model="form.donghuangzhong" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="盘古斧碎片">
			<el-slider v-model="form.pangufu" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="炼妖壶碎片">
			<el-slider v-model="form.lianyaohu" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="昊天塔碎片">
			<el-slider v-model="form.haotianta" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="伏羲琴碎片">
			<el-slider v-model="form.fuxiqin" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="神农鼎碎片">
			<el-slider v-model="form.shennongding" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="崆峒印碎片">
			<el-slider v-model="form.kongtongyin" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="昆仑镜碎片">
			<el-slider v-model="form.kunlunjing" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item label="女娲石碎片">
			<el-slider v-model="form.nvwashi" show-input max=10>
			</el-slider>
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">更新</el-button>
			<el-button type="danger" @click="onDelete">删除</el-button>
			<el-button type="infor" @click="onCancal">取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				info: "",
			};
		},
		props: {
			formData: Object
		},
		methods: {
			onSubmit: function() {
				console.log('on submit');
				this.$axios.post('updateuserpiece', this.form)
					.then(resp => {
						this.info = resp.data;
						this.$message.success('更新成功');
						this.$emit('get-data', null);
					})
					.catch(function(error) {
						this.$message.error('更新失败，原因:', error);
						this.$emit('get-data', null);
					});
			},
			onCancal: function() {
				console.log('on cancal');
				this.$emit('get-data', null);
			},
			onDelete: function() {
				console.log('on delete');
				this.$axios.post('deleteuserpiece', this.form)
					.then(resp => {
						this.info = resp.data;
						this.$message.success('删除成功');
						this.$emit('get-data', null);
					})
					.catch(function(error) {
						this.$message.error('删除失败，原因:', error);
						this.$emit('get-data', null);
					});
			}
		},
		mounted() {
			this.form = JSON.parse(JSON.stringify(this.formData));
		}
	}
</script>

<style>
</style>
