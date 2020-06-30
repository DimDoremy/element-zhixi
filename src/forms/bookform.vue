<template>
	<el-form ref="form" :model="form" label-width="120px">
		<el-form-item label="Openid">
			<el-input v-model="form.openid" disabled></el-input>
		</el-form-item>
		<el-form-item label="怪物1">
			<el-input-number v-model="form.monster1" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物2">
			<el-input-number v-model="form.monster2" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物3">
			<el-input-number v-model="form.monster3" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物4">
			<el-input-number v-model="form.monster4" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物5">
			<el-input-number v-model="form.monster5" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物6">
			<el-input-number v-model="form.monster6" :min="0" :max="1"></el-input-number>
		</el-form-item>
		<el-form-item label="怪物7">
			<el-input-number v-model="form.monster7" :min="0" :max="1"></el-input-number>
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
				info: ""
			};
		},
		props: {
			formData: Object
		},
		methods: {
			onSubmit: function() {
				console.log('on submit');
				this.$axios.post('updatehandbook', this.form)
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
				this.$axios.post('deletehandbook', this.form)
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
