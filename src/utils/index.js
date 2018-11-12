import React from "react";
import {PixelRatio} from "react-native";
import Dimensions from "Dimensions";

export default {
    ratio : PixelRatio.get(),
    pixel: 1/PixelRatio.get(),
    size: ()=>Dimensions.get('window'),
    Fetch: function (url, params, method = 'GET') {
        let sendUrl = url,
          paramsArray = [],
          sendMethod = method.toUpperCase(),
          options = {
            method,
            // headers: {
            //   'Content-Type': 'application/json'
            // },
            mode: 'cors',
            credentials: 'include',
          };
    
        if (sendMethod === 'GET') {
          if (params) {
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (sendUrl.search(/\?/) === -1) {
              sendUrl += '?' + paramsArray.join('&')
            } else {
              sendUrl += '&' + paramsArray.join('&')
            }
          }
        } else if (sendMethod === 'POST' || sendMethod === 'PUT' || sendMethod === 'DELETE') {
          let formData = new FormData();
          Object.keys(params).forEach(key => formData.append(key, params[key]))
          options['body'] = formData;
         
          // options['body'] = JSON.stringify(params);
        }
    
        return new Promise((resolve, reject) => {
          fetch(sendUrl, options)
            .then(response => {
              let contentType = response.headers.get('content-type');
              if (contentType.includes('application/json')) {
                return response.json()
              } else if (contentType.includes('text/html')) {
                return response.text()
              } else {
                throw new Error(`Sorry, content-type ${contentType} not supported`)
              }
            }).then(res => {
              resolve(res)
            }).catch(err => {
              reject(new Error(err.message))
            })
        })
      }
}