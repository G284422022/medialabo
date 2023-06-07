  let toshiID = document.querySelector('#print');
  toshiID.addEventListener('click', sendRequest);
 
function sendRequest() {
	// URL を設定
    let i = document.querySelector('input[name="toshi"]');
    let key = parseInt(i.value);
	let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+key+'.json';

	// 通信開始
	axios.get(url)
		.then(showResult)
		.catch(showError)
		.then(finish);
}

function showResult(resp) {
	// サーバから送られてきたデータを出力
	let data = resp.data;

	// data が文字列型なら，オブジェクトに変換する
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
	let kekka = document.querySelector('p#kekka');
    kekka.textContent = data.name+'の天気は、'+data.weather[0].description+'　最高気温は'+data.main.temp_max+'°です。最低気温は'+data.main.temp_min+'°です。'
   
	let t1 = document.querySelector('th#tenkoutoshi');
	t1.textContent = data.name
	let tenten = data.weather[0].description
	let t2 = document.querySelector('th#tenkou');
    t2.textContent = tenten
	let t3 = document.querySelector('th#tenkousaikou');
	t3.textContent = data.main.temp_max+'°です。'
	let t4 = document.querySelector('th#tenkousaitei');
	t4.textContent = data.main.temp_min+'°です。'
}
// 通信エラーが発生した時の処理
function showError(err) {
	console.log(err);
    let kekkaerr = document.querySelector('p#kekka');
    kekkaerr.textContent = '入力された都市IDは存在しない都市IDです。別のIDをお試しください。'
}	

// 通信の最後にいつも実行する処理
function finish() {
	console.log('Ajax 通信が終わりました');
}