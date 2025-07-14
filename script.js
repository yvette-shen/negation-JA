// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {
        "green_apple.png": "embedded\u002Fc146c8e3d01860926a31043791de280f595f23858b8fe147fd9eb480457e16ee.png",
        "red_apple.png": "embedded\u002F5358fd5d4477f57856478293597907bfed3bfd923e91365f6178e62e507e98a4.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "この実験ではフルスクリーンモードで行われます。",
          "hint": "ここをクリックしてください。",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": -14,
              "angle": 0,
              "width": 348.8,
              "height": 120.05,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "こんにちは！\n実験にご参加いただき\nありがとうございます。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Greetings",
          "timeout": "2000",
          "plugins": []
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": -350,
              "top": 0,
              "angle": 0,
              "width": 634.78,
              "height": 487.17,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "これから行う課題について説明します。\n\n1. まず、画面中央に「＋」マークが表示されます。\n    これは注視点を示すもので、画面中央を見てください。\n\n2. その後、1つの文が3つの部分に分けられ、順番に画面上に提示されます。\n\n3. 表示される文をよく読み、その意味を理解するようにしてください。\n　一つの部分を読み終わったら、「Spaceキー」を押して次の部分に進みます。\n\n4. 文を読み終わった後、1枚の画像が表示されます。\n　画像が表示されるまでの時間が「短い場合」と「長い場合」があります。\n\n5. 表示された画像の内容が、先ほど読んだ文の意味と一致しているかどうかを\n   判断してください。\n\n6. 一致していると思った場合は「F」キーを、不一致だと思った場合は「J」キーを\n   押してください。\n\n7.できるだけ正確かつ素早く判断するようにしてください。\n\n何か質問がある場合は、実験を始める前にお知らせください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "17",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "left"
            },
            {
              "type": "i-text",
              "left": -25,
              "top": -275,
              "angle": 0,
              "width": 64,
              "height": 36.16,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "教示",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": -13,
              "top": 275,
              "angle": 0,
              "width": 673.37,
              "height": 27.12,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "準備ができたら「Spaceキー」を押して練習試行を開始します",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "start"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//参加者IDをランダム生成
const digits = 10;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
          },
          "title": "Instruction",
          "plugins": []
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "TrainingSequence",
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "である",
                  "image": "hosigata.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "である",
                  "image": "hisigata.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "ではない",
                  "image": "hisigata.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "ではない",
                  "image": "hosigata.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "である",
                  "image": "hisigata.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "である",
                  "image": "hosigata.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "ではない",
                  "image": "hosigata.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "ではない",
                  "image": "hisigata.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ある",
                  "image": "hosiue.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ある",
                  "image": "hosisita.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ない",
                  "image": "hosisita.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ない",
                  "image": "hosiue.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ある",
                  "image": "hosisita.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ある",
                  "image": "hosiue.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ない",
                  "image": "hosiue.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ない",
                  "image": "hosisita.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": "8"
              },
              "files": {
                "hisigata.png": "embedded\u002F3283833d965c86197c936967ff594c026b2733f5f51ccd91d84f6ccd2d01d9dd.png",
                "hosigata.png": "embedded\u002F48670b597ed51b9fae1c9989f557ff1ee829ad5d41e88c4b0c40188c2eceb8ef.png",
                "hosisita.png": "embedded\u002Fd66ca22297dbc8644ef95225b7ac39494bc96b5a2e666217140230960be781bc.png",
                "hosiue.png": "embedded\u002F2f12c85fe873cb01218004cd4cc4713e34bb1de945f755fca1b1d0c2689ad116.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_training1500",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 20.99,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "ITI",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence1}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 352.91,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part1"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence2}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 397.03,
                        "height": 20.34,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part2"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence3}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 352.91,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part3"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank_1500",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": "400",
                        "height": "400",
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      },
                      {
                        "type": "i-text",
                        "left": -175,
                        "top": 250,
                        "angle": 0,
                        "width": 392.13,
                        "height": 60.03,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "表示された画像の内容が、先ほど読んだ文の意味と\n一致していると思った場合は「F」キーを、\n不一致だと思った場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "left"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "F",
                      "keypress(j)": "J"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Image",
                    "correctResponse": "${this.parameters.correct}",
                    "timeout": "10000"
                  }
                ]
              }
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "である",
                  "image": "hosigata.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "である",
                  "image": "hisigata.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "ではない",
                  "image": "hisigata.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "星型",
                  "sentence3": "ではない",
                  "image": "hosigata.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "である",
                  "image": "hisigata.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "である",
                  "image": "hosigata.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "ではない",
                  "image": "hosigata.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "菱形",
                  "sentence3": "ではない",
                  "image": "hisigata.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ある",
                  "image": "hosiue.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ある",
                  "image": "hosisita.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ない",
                  "image": "hosisita.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "星型は",
                  "sentence2": "菱形の上に",
                  "sentence3": "ない",
                  "image": "hosiue.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ある",
                  "image": "hosisita.png",
                  "correct": "F",
                  "AorN": "A",
                  "cond": "真肯定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ある",
                  "image": "hosiue.png",
                  "correct": "J",
                  "AorN": "A",
                  "cond": "偽肯定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ない",
                  "image": "hosiue.png",
                  "correct": "F",
                  "AorN": "N",
                  "cond": "真否定"
                },
                {
                  "sentence1": "菱形は",
                  "sentence2": "星型の上に",
                  "sentence3": "ない",
                  "image": "hosisita.png",
                  "correct": "J",
                  "AorN": "N",
                  "cond": "偽否定"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": "8"
              },
              "files": {
                "hisigata.png": "embedded\u002F3283833d965c86197c936967ff594c026b2733f5f51ccd91d84f6ccd2d01d9dd.png",
                "hosigata.png": "embedded\u002F48670b597ed51b9fae1c9989f557ff1ee829ad5d41e88c4b0c40188c2eceb8ef.png",
                "hosisita.png": "embedded\u002Fd66ca22297dbc8644ef95225b7ac39494bc96b5a2e666217140230960be781bc.png",
                "hosiue.png": "embedded\u002F2f12c85fe873cb01218004cd4cc4713e34bb1de945f755fca1b1d0c2689ad116.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_training250",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 20.99,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "ITI",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence1}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 352.91,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part1"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence2}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 397.03,
                        "height": 20.34,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part2"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence3}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 250,
                        "angle": 0,
                        "width": 352.91,
                        "height": 18.08,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "読み終わったら「Spaceキー」を押してください",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part3"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank_250",
                    "timeout": "250"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": "400",
                        "height": "400",
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      },
                      {
                        "type": "i-text",
                        "left": -175,
                        "top": 250,
                        "angle": 0,
                        "width": 392.13,
                        "height": 60.03,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "表示された画像の内容が、先ほど読んだ文の意味と\n一致していると思った場合は「F」キーを、\n不一致だと思った場合は「J」キーを押してください。",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "16",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "left"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "F",
                      "keypress(j)": "J"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Image",
                    "correctResponse": "${this.parameters.correct}",
                    "timeout": "10000"
                  }
                ]
              }
            }
          ]
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 15,
              "top": -75,
              "angle": 0,
              "width": 510,
              "height": 151.87,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "練習試行は以上となります。\n\n次の試行からは、どのキーを押すか、\n注意書きは表示されません。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "30",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 125,
              "angle": 0,
              "width": 672.54,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "準備ができましたら「Spaceキー」を押して、\n本実験にお進みください。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "Space"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Screen"
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "LoopSequence",
          "shuffle": true,
          "content": [
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "これは",
                  "sentence2": "円形",
                  "sentence3": "である",
                  "image": "circle.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "円形",
                  "sentence3": "である",
                  "image": "rectangle.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "円形",
                  "sentence3": "ではない",
                  "image": "rectangle.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "円形",
                  "sentence3": "ではない",
                  "image": "circle.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "台形",
                  "sentence3": "である",
                  "image": "trapezoid.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "台形",
                  "sentence3": "である",
                  "image": "triangle.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "台形",
                  "sentence3": "ではない",
                  "image": "triangle.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "台形",
                  "sentence3": "ではない",
                  "image": "trapezoid.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "青色",
                  "sentence3": "である",
                  "image": "blue.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "青色",
                  "sentence3": "である",
                  "image": "yellow.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "青色",
                  "sentence3": "ではない",
                  "image": "yellow.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "青色",
                  "sentence3": "ではない",
                  "image": "blue.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "赤色",
                  "sentence3": "である",
                  "image": "red.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "赤色",
                  "sentence3": "である",
                  "image": "purple.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "赤色",
                  "sentence3": "ではない",
                  "image": "purple.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "赤色",
                  "sentence3": "ではない",
                  "image": "red.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "image": "open_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "image": "closed_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "image": "closed_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "image": "open_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "image": "closed_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "image": "open_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "image": "open_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "image": "closed_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "寝て",
                  "sentence3": "いる",
                  "image": "sleep.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "寝て",
                  "sentence3": "いる",
                  "image": "awake.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "寝て",
                  "sentence3": "いない",
                  "image": "awake.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "寝て",
                  "sentence3": "いない",
                  "image": "sleep.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "起きて",
                  "sentence3": "いる",
                  "image": "awake.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "起きて",
                  "sentence3": "いる",
                  "image": "sleep.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "起きて",
                  "sentence3": "いない",
                  "image": "sleep.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "赤ちゃんは",
                  "sentence2": "起きて",
                  "sentence3": "いない",
                  "image": "awake.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "うさぎは",
                  "sentence2": "亀の上に",
                  "sentence3": "いる",
                  "image": "rabbitup.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "うさぎは",
                  "sentence2": "亀の上に",
                  "sentence3": "いる",
                  "image": "rabbitdown.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "うさぎは",
                  "sentence2": "亀の上に",
                  "sentence3": "いない",
                  "image": "rabbitdown.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "うさぎは",
                  "sentence2": "亀の上に",
                  "sentence3": "いない",
                  "image": "rabbitup.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "亀は",
                  "sentence2": "うさぎの上に",
                  "sentence3": "いる",
                  "image": "rabbitdown.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "亀は",
                  "sentence2": "うさぎの上に",
                  "sentence3": "いる",
                  "image": "rabbitup.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "亀は",
                  "sentence2": "うさぎの上に",
                  "sentence3": "いない",
                  "image": "rabbitup.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "亀は",
                  "sentence2": "うさぎの上に",
                  "sentence3": "いない",
                  "image": "rabbitdown.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "いちごは",
                  "sentence2": "スイカの上に",
                  "sentence3": "ある",
                  "image": "berryup.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "いちごは",
                  "sentence2": "スイカの上に",
                  "sentence3": "ある",
                  "image": "berrydown.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "いちごは",
                  "sentence2": "スイカの上に",
                  "sentence3": "ない",
                  "image": "berrydown.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "いちごは",
                  "sentence2": "スイカの上に",
                  "sentence3": "ない",
                  "image": "berryup.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "スイカは",
                  "sentence2": "いちごの上に",
                  "sentence3": "ある",
                  "image": "berrydown.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "スイカは",
                  "sentence2": "いちごの上に",
                  "sentence3": "ある",
                  "image": "berryup.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "スイカは",
                  "sentence2": "いちごの上に",
                  "sentence3": "ない",
                  "image": "berryup.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "スイカは",
                  "sentence2": "いちごの上に",
                  "sentence3": "ない",
                  "image": "berrydown.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {
                "awake.png": "embedded\u002F2202cc3ac77c6bf5e47310965d2c732a50f1c8c3f583079937ad02f5a3f1ee55.png",
                "berrydown.png": "embedded\u002F590f40a6c6a33565d467ebc35263dc3a6bd91801345c6da646b3a772bc6308b4.png",
                "berryup.png": "embedded\u002Fde53f53563febd5fccccc4bb26cb16f1b35c0a0a88d0f95569d0a0429669b132.png",
                "closed_window.png": "embedded\u002Fc2172749bd995857ab57260fb8e69d91ffb3931a1d9f634bf06c79d0f00032b0.png",
                "blue.png": "embedded\u002F4051517d471fd083ede1a9c83f13bd2eb16d5dd0767c5ceb1d9f5a876dbefa69.png",
                "purple.png": "embedded\u002F1c7c9f960e59c5d9778977ed78c4c6a1a6cafe31e01e2afc46d8cc231f81390f.png",
                "rabbitdown.png": "embedded\u002F05e7261cf21b2d9bc32be59519c904639f6685c8c32a37c79cd3248e5f529240.png",
                "rabbitup.png": "embedded\u002Ff3947f7001bef102e448c3230644a4d58a145ee00f65ba10b5129e4ae35ce230.png",
                "rectangle.png": "embedded\u002F5b37c05be38bddda1c12b2e373c4949f60c8dae16b80797849283e04c24db4d6.png",
                "red.png": "embedded\u002F8fe68ac9e21b669b77ab95827ef6bf82b9ceeb58ee644fac46c66c62e81a55cd.png",
                "sleep.png": "embedded\u002F7d3eeca415af3b8e397e95f4429b20e891971abb9d91bc495b9daa51527dbed8.png",
                "trapezoid.png": "embedded\u002F8f74536f235b27735fa1e64c8b1b5ee1b600c23f0d69b5947264307e04365a3f.png",
                "circle.png": "embedded\u002Fe2d7c910c2cb5b2affc35762b2965999f17a7369c2f5e18579ea305fae94fbc9.png",
                "triangle.png": "embedded\u002Fa998772cec78343b4952aa7b4e3083cafa58e4e29d05193587462ebd50f74b58.png",
                "yellow.png": "embedded\u002Fa496d35b170613c6f2c56c7e2f23fe7783d0d0a6fd121e0f6ca172e5d5badf20.png",
                "open_window.png": "embedded\u002F7c3895e516484ddd2b36fbbb441d937feb367f991e6168e5dc6d5c5349c1e39e.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop1500",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 20.99,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "ITI",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence1}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part1"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence2}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part2"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence3}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part3"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank_1500",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": "400",
                        "height": "400",
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "F",
                      "keypress(j)": "J"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Image",
                    "correctResponse": "${this.parameters.correct}",
                    "timeout": "5000"
                  }
                ]
              }
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "これは",
                  "sentence2": "三角形",
                  "sentence3": "である",
                  "image": "triangle.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "三角形",
                  "sentence3": "である",
                  "image": "circle.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "三角形",
                  "sentence3": "ではない",
                  "image": "circle.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "三角形",
                  "sentence3": "ではない",
                  "image": "triangle.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "長方形",
                  "sentence3": "である",
                  "image": "rectangle.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "長方形",
                  "sentence3": "である",
                  "image": "triangle.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "長方形",
                  "sentence3": "ではない",
                  "image": "triangle.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "これは",
                  "sentence2": "長方形",
                  "sentence3": "ではない",
                  "image": "rectangle.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "黄色",
                  "sentence3": "である",
                  "image": "yellow.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "黄色",
                  "sentence3": "である",
                  "image": "blue.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "黄色",
                  "sentence3": "ではない",
                  "image": "blue.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "黄色",
                  "sentence3": "ではない",
                  "image": "yellow.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "紫色",
                  "sentence3": "である",
                  "image": "purple.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "紫色",
                  "sentence3": "である",
                  "image": "yellow.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "紫色",
                  "sentence3": "ではない",
                  "image": "yellow.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "点は",
                  "sentence2": "紫色",
                  "sentence3": "ではない",
                  "image": "purple.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "1"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "image": "open_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "image": "closed_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "image": "closed_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "image": "open_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "image": "closed_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "image": "open_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "image": "open_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "image": "closed_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いる",
                  "image": "light_on.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いる",
                  "image": "light_off.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いない",
                  "image": "light_off.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いない",
                  "image": "light_on.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いる",
                  "image": "light_off.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いる",
                  "image": "light_on.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いない",
                  "image": "light_on.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いない",
                  "image": "light_off.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "2"
                },
                {
                  "sentence1": "星は",
                  "sentence2": "プラスの上に",
                  "sentence3": "ある",
                  "image": "starup.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "星は",
                  "sentence2": "プラスの上に",
                  "sentence3": "ある",
                  "image": "stardown.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "星は",
                  "sentence2": "プラスの上に",
                  "sentence3": "ない",
                  "image": "stardown.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "星は",
                  "sentence2": "プラスの上に",
                  "sentence3": "ない",
                  "image": "starup.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "プラスは",
                  "sentence2": "星の上に",
                  "sentence3": "ある",
                  "image": "stardown.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "プラスは",
                  "sentence2": "星の上に",
                  "sentence3": "ある",
                  "image": "starup.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "プラスは",
                  "sentence2": "星の上に",
                  "sentence3": "ない",
                  "image": "starup.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "プラスは",
                  "sentence2": "星の上に",
                  "sentence3": "ない",
                  "image": "stardown.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "りんごは",
                  "sentence2": "バナナの上に",
                  "sentence3": "ある",
                  "image": "appleup.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "りんごは",
                  "sentence2": "バナナの上に",
                  "sentence3": "ある",
                  "image": "appledown.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "りんごは",
                  "sentence2": "バナナの上に",
                  "sentence3": "ない",
                  "image": "appledown.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "りんごは",
                  "sentence2": "バナナの上に",
                  "sentence3": "ない",
                  "image": "appleup.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "バナナは",
                  "sentence2": "りんごの上に",
                  "sentence3": "ある",
                  "image": "appledown.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "バナナは",
                  "sentence2": "りんごの上に",
                  "sentence3": "ある",
                  "image": "appleup.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A",
                  "stimili": "3"
                },
                {
                  "sentence1": "バナナは",
                  "sentence2": "りんごの上に",
                  "sentence3": "ない",
                  "image": "appleup.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N",
                  "stimili": "3"
                },
                {
                  "sentence1": "バナナは",
                  "sentence2": "りんごの上に",
                  "sentence3": "ない",
                  "image": "appledown.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N",
                  "stimili": "3"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {
                "blue.png": "embedded\u002F4051517d471fd083ede1a9c83f13bd2eb16d5dd0767c5ceb1d9f5a876dbefa69.png",
                "appledown.png": "embedded\u002Fc3e57cfb5e58252c7134ef4959fdd2956143a123477de8c267fa0f8b166b7a41.png",
                "appleup.png": "embedded\u002F7dd9b71f08c0330534538ec7b1f13d8659dd86fe13df9c5af8cfa08b6061b173.png",
                "closed_door.png": "embedded\u002Fcbb2863892b8b0472418fc3b59dbdb27927e4c2cb64e92cd201775ab648b3645.png",
                "light_off.png": "embedded\u002Fa005b9773c7dba86858d660a35c3efa51b3347cfdfee869bdacc06ac779c1cfc.png",
                "light_on.png": "embedded\u002F19010ef5f47cb9a0a81d16f9188b0d68b419752d4021d2ec285aa13c228ba751.png",
                "open_door.png": "embedded\u002Fa1f3004ec567700aa9385f5656402d7441ca220c85bf78ff87f03da68c9aee31.png",
                "purple.png": "embedded\u002F1c7c9f960e59c5d9778977ed78c4c6a1a6cafe31e01e2afc46d8cc231f81390f.png",
                "rectangle.png": "embedded\u002F5b37c05be38bddda1c12b2e373c4949f60c8dae16b80797849283e04c24db4d6.png",
                "red.png": "embedded\u002F8fe68ac9e21b669b77ab95827ef6bf82b9ceeb58ee644fac46c66c62e81a55cd.png",
                "stardown.png": "embedded\u002Fe4f2b1bb85721df85d32a94b8ee55e091823813aa4d5fe550e5304c63b095bd7.png",
                "starup.png": "embedded\u002F53a27d37abeeb44b11a4d3ae04874a20a64e7e28c0aef77f9227a1e0342c1f4d.png",
                "circle.png": "embedded\u002Fe2d7c910c2cb5b2affc35762b2965999f17a7369c2f5e18579ea305fae94fbc9.png",
                "triangle.png": "embedded\u002Fa998772cec78343b4952aa7b4e3083cafa58e4e29d05193587462ebd50f74b58.png",
                "yellow.png": "embedded\u002Fa496d35b170613c6f2c56c7e2f23fe7783d0d0a6fd121e0f6ca172e5d5badf20.png"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_250",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "Sequence",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 20.99,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "+",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "ITI",
                    "timeout": "1500"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence1}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part1"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence2}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part2"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 2,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": 398.11,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "${parameters.sentence3}",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Sentence_part3"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Blank_250",
                    "timeout": "250"
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "image",
                        "left": 0,
                        "top": 0,
                        "angle": 0,
                        "width": "400",
                        "height": "400",
                        "stroke": null,
                        "strokeWidth": 0,
                        "fill": "black",
                        "src": "${this.files[this.parameters.image]}",
                        "autoScale": false
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(f)": "F",
                      "keypress(j)": "J"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "Image",
                    "correctResponse": "${this.parameters.correct}",
                    "timeout": "5000"
                  }
                ]
              }
            }
          ]
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
            {
              "type": "i-text",
              "left": 0,
              "top": 0,
              "angle": 0,
              "width": 640,
              "height": 203.94,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "ご協力いただき、ありがとうございました。\n\nこの実験はこれで終了です。\n\nスペースキーを押すと終了します。",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": 32,
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            }
          ],
          "viewport": [
            800,
            600
          ],
          "files": {},
          "responses": {
            "keypress(Space)": "end"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
//check Tardy
//ファイル名をユーザーIDにする
const participantID = this.state.participantID

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "ZgbP88npaDyb",
    filename: filename,
    data: data,
  }),
});
}
          },
          "title": "Screen",
          "timeout": "10000",
          "tardy": true
        }
      ]
    }
  ]
})

// Let's go!
study.run()