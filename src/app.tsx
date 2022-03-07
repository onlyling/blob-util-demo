import {
  Provider,
  Space,
  Card,
  Button,
} from '@fruits-chain/react-native-xiaoshu'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
// eslint-disable-next-line import/no-named-as-default,import/namespace,import/no-named-as-default-member
import ReactNativeBlobUtil from 'react-native-blob-util'

const { fs } = ReactNativeBlobUtil

const buildCacheUri = (filename: string, uri?: boolean) =>
  `${uri ? 'file://' : ''}${fs.dirs.CacheDir}/${filename}`

const App = () => {
  return (
    <Provider>
      <ScrollView style={STYLES.page}>
        <Space tail head>
          <Card title="File System Access API" square>
            <Space>
              <Button
                text="dirs"
                onPress={() => {
                  // PictureDir、MusicDir、MainBundleDir、DownloadDir、DocumentDir、CacheDir
                  console.log(fs.dirs)
                }}
              />

              <Button
                text="createFile demo.txt"
                onPress={() => {
                  fs.createFile(
                    buildCacheUri('demo.txt', false),
                    'just do test',
                    'utf8',
                  ).then(() => {
                    console.log('createFile finish')
                  })
                }}
              />

              <Button
                text="readFile demo.txt"
                onPress={() => {
                  fs.readFile(buildCacheUri('demo.txt', false), 'utf8').then(
                    t => {
                      console.log('content => ', t)
                    },
                  )
                }}
              />

              <Button
                text="unlink demo.txt"
                onPress={() => {
                  fs.unlink(buildCacheUri('demo.txt', false)).then(t => {
                    console.log('unlink finish')
                  })
                }}
              />

              <Button
                text="writeFile demo.txt"
                onPress={() => {
                  fs.writeFile(
                    buildCacheUri('demo.txt', false),
                    'writeFile',
                    'utf8',
                  ).then(t => {
                    console.log('writeFile finish')
                  })
                }}
              />

              <Button
                text="hash demo.txt"
                onPress={() => {
                  fs.hash(buildCacheUri('demo.txt', false), 'sha256').then(
                    t => {
                      console.log('hash finish => ', t)
                    },
                  )
                }}
              />

              <Button
                text="mkdir demo-dir"
                onPress={() => {
                  fs.mkdir(buildCacheUri('demo-dir', false)).then(() => {
                    console.log('mkdir finish')
                  })
                }}
              />

              <Button
                text="mkdir demo-dir/test"
                onPress={() => {
                  fs.mkdir(buildCacheUri('demo-dir/test', false)).then(() => {
                    console.log('mkdir finish')
                  })
                }}
              />

              <Button
                text="unlink demo-dir"
                onPress={() => {
                  fs.unlink(buildCacheUri('demo-dir', false)).then(() => {
                    console.log('unlink finish')
                  })
                }}
              />

              <Button
                text="stat demo-dir"
                onPress={() => {
                  fs.stat(buildCacheUri('demo-dir', false)).then(info => {
                    console.log('info finish => ', info)
                  })
                }}
              />

              <Button
                text="ls fs.dirs.CacheDir"
                onPress={() => {
                  fs.ls(buildCacheUri('', false)).then(info => {
                    // ["http-cache", "image_cache", "demo.txt", "demo-dir"]
                    console.log('ls finish => ', info)
                  })
                }}
              />

              <Button
                text="ls demo-dir"
                onPress={() => {
                  fs.ls(buildCacheUri('demo-dir', false)).then(info => {
                    // ["http-cache", "image_cache", "demo.txt", "demo-dir"]
                    console.log('ls finish => ', info)
                  })
                }}
              />

              <Button
                text="mv demo.txt to demo-dir/demo.txt"
                onPress={() => {
                  fs.mv(
                    buildCacheUri('demo.txt', false),
                    buildCacheUri('demo-dir/demo.txt', false),
                  ).then(v => {
                    // mv finish =>  undefined
                    console.log('mv finish => ', v)
                  })
                }}
              />

              <Button
                text="mv demo-dir/demo.txt to demo.txt"
                onPress={() => {
                  fs.mv(
                    buildCacheUri('demo-dir/demo.txt', false),
                    buildCacheUri('demo.txt', false),
                  ).then(v => {
                    // mv finish =>  undefined
                    console.log('mv finish => ', v)
                  })
                }}
              />

              <Button
                text="cp demo-dir/demo.txt to demo.txt"
                onPress={() => {
                  fs.cp(
                    buildCacheUri('demo.txt', false),
                    buildCacheUri('demo-dir/demo.txt', false),
                  ).then(v => {
                    // cp finish =>  undefined
                    console.log('cp finish => ', v)
                  })
                }}
              />

              <Button
                text="exists demo.txt"
                onPress={() => {
                  fs.exists(buildCacheUri('demo.txt', false)).then(v => {
                    // exists finish =>  true/false
                    console.log('exists finish => ', v)
                  })
                }}
              />

              <Button
                text="isDir demo.txt"
                onPress={() => {
                  fs.isDir(buildCacheUri('demo.txt', false)).then(v => {
                    // isDir finish =>  false
                    console.log('isDir finish => ', v)
                  })
                }}
              />

              <Button
                text="isDir demo-dir"
                onPress={() => {
                  fs.isDir(buildCacheUri('demo-dir', false)).then(v => {
                    // isDir finish =>  false
                    console.log('isDir finish => ', v)
                  })
                }}
              />

              <Button
                text="lstat demo-dir"
                onPress={() => {
                  fs.lstat(buildCacheUri('demo-dir', false)).then(v => {
                    console.log('lstat finish => ', v)
                  })
                }}
              />
            </Space>
          </Card>
        </Space>
      </ScrollView>
    </Provider>
  )
}

const STYLES = StyleSheet.create({
  page: {
    backgroundColor: '#f5f5f5',
  },
})

export default App
