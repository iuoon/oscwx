/**
 * Created by mwuyz on 2016/10/28.
 */
import "whatwg-fetch"
import promise from "es6-promise"

/*
 *获取资讯列表
 */
export let getList = async (page, tag) => {
  let response = await fetch(`http://192.168.1.107:8081/news_list?pageIndex=${page}&pageSize=20&catalog=${tag}`, {
    method: 'GET',
    mode: 'cors',
  }).catch((error) => {
    console.log(error)
  })
  return await response.json().catch((error) => {
    console.log(error)
  })
}

