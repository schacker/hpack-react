export default function (url, op = {}) {
  let config = {
    method: 'get',
    credentials: 'include'
  }
  let headers = {
    'Accept': 'application/json'
  }
  if ((op.method === 'get' || !op.method) && (op.param)) {
    // 当发送请求为get时，将参数拼在url后面
    let key
    url += '?'
    for (key in op.param) {
      let value = encodeURIComponent((op.param[key] === 0 ? op.param[key] : (op.param[key] || '')).toString())
      url += `${key}=${value}&`
    }
    url = url.substr(0, url.length - 1)
  } else if (op.method === 'post' || op.method === 'POST') {
    if (op.formData) { // 如果后端需要formData
      let formData = new window.FormData()
      let key
      for (key in op.param) {
        formData.append(key, op.param[key])
      }
      op.body = formData
      delete(op.formData) // 去除多余的option
    } else {
      headers['Content-Type'] = 'application/json' // post参数以json的方式传给后端
      op.body = JSON.stringify(op.param) // 正常的json传给后端
    }
  }
  headers = Object.assign(headers, op.headers)
  delete(op.param) // 去除多余的option

  let obj = Object.assign({}, config, op)
  obj.headers = headers

  return fetch('/api/' + url, obj)
    .then(res => {
      return res.json()
    })
    .then(data => {
      return data
    })
}
