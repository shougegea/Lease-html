$(function(){
	let addBrand = new Vue({
		el : '.left_add',
		data : {
			logo : ''
		},
		methods : {
			// 选择logo
			selectLogo(){
				// 上传图片获取url
				let formDate = new FormData()
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				formDate.append('file', document.getElementById("brandLogo").files[0])
				axios.post('http://localhost:8077/addImg',formDate,config).then((response)=>{
					// alert(JSON.stringify(response.data['data']))
					$("#brandLogoImg").prop("src", response.data['data'])
					this.$set(this, 'logo', response.data['data'])
					$("#flag").val("1")
				})
			},
			// 添加品牌
			addBrand(){
				let formDate = new FormData()
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				formDate.append('name', $("#name").val())	
				formDate.append('bid', 4)
				formDate.append('logo', this.logo)
				formDate.append('placeOrigin', $("#area").val())
				formDate.append('brand_describe', $("#brand_describe").val())
				formDate.append('status', 1)
				axios.post('http://localhost:8077/addBrand',formDate,config).then((response)=>{
					// alert(JSON.stringify(response.data['data']))
					window.location.href = "../BackstageManager/Brand_Manage.html"
				})
			},
			// 取消
			cancel(){
				history.go(-1)
			}
		}
	})
})