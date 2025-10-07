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
      "files": {},
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
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "１．研究の背景と目的",
              "content": "\u003Cp\u003E否定文は、私たちの日常生活の中で頻繁に使われている表現の一つです。これまでの研究では、英語のように「not」などの否定詞が文の前半に現れる言語を対象としたものが多く見られます。一方で、日本語のように文の後ろの方に否定表現が現れる言語については、まだ明らかになっていない点が多くあります。\u003C\u002Fp\u003E\n本研究では、日本語と中国語（マンダリン）を母語とする方々を対象に、文と図の一致を判断する課題を通して、否定文の理解に関するしくみを調べることを目的としています。この研究により、言語構造の違いが文の理解にどのように影響するかについての新しい知見が得られることが期待されます。"
            },
            {
              "required": true,
              "type": "text",
              "title": "２．研究の方法",
              "content": "\u003Cp\u003E参加者には、文と絵の照合課題に関するWeb実験にご協力いただきます。\n\u003Cp\u003E実験では、画面上に提示される日本語の文を読み、その後に表示される図との内容が一致しているかどうかを判断して、ボタンで回答していただきます。\n\u003Cp\u003E参加者は各自のPCまたはインターネット接続可能な端末から、任意の場所・時間に実験へ参加可能です。\n\u003Cp\u003E所要時間は1回あたり約10〜15分で、途中で中止することも可能です。\n\u003Cp\u003E本実験は無記名式で実施されるため、収集される回答データから個人が特定されることは一切ありません。すべてのデータは統計的に処理され、研究目的以外には使用されません。\n\u003Cp\u003E本研究は、明治学院大学心理学部倫理委員会の承認を得ており、2028年3月31日まで実施される予定です（2025029）。"
            },
            {
              "required": true,
              "type": "text",
              "title": "３．研究を実施する者",
              "content": "\u003Cp\u003E研究責任者：金城　光（明治学院大学心理学部心理学科・教授）\n\u003Cp\u003E研究分担者：SHEN MURONG（明治学院大学心理学部心理学科・4年生）、上田　卓司（早稲田大学・非常勤講師）\n"
            },
            {
              "required": true,
              "type": "text",
              "title": "４．研究への参加が任意であること",
              "content": "\u003Cp\u003E本研究への参加は任意です。研究に参加しないことによって、今後いかなる不利益な対応を受けることはありません。ご協力いただく実験課題についても、実施が難しいと感じた場合には、中断または中止していただいて構いません。また、研究への参加の有無や実験課題への回答内容が、学業成績や単位取得には一切関係しません。\n\u003Cp\u003Eなお、本実験は無記名式で実施されており、収集されるデータから個人を特定することはできません。そのため、実験参加後に研究協力の撤回（データの削除）をご希望いただいても、既に収集されたデータを特定して削除することはできませんので、あらかじめご了承ください。"
            },
            {
              "required": true,
              "type": "text",
              "title": "５．本研究への参加をお願いする理由",
              "content": "\u003Cp\u003E本研究は、日本語と中国語における否定文の理解の仕方の違いについて調べることを目的としています。そのため、母語が日本語または中国語（マンダリン）である18歳以上30歳未満の若年成人の方を対象としています。教育歴については、大学または大学院に在学中、もしくは卒業していることが条件となります。これらの条件に当てはまる方にご協力をお願いしています。"
            },
            {
              "required": true,
              "type": "text",
              "title": "６．本研究への参加に伴う危険性、不利益",
              "content": "本研究への参加に伴い、健康被害等の危険や、痛み等の不快な状態、その他参加される方に不利益となることが生じる可能性はありません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "７．研究結果の使われ方",
              "content": "\u003Cp\u003Eいただいたデータは、本研究を遂行し、その後検証するために必要な範囲においてのみ使用いたします。本研究のために研究従事者以外の者または明治学院大学心理学部以外の機関にデータを提供することはありません。なお、本研究の信頼性と透明性を高めるために、研究再現性の確保を目的としてOSF（Open Science Framework）等に公開する可能性があります。本研究では個人情報を含んでおりませんので、公開されるデータにはもちろん個人を特定できる情報は一切含まれません。\n\u003Cp\u003Eいただいたデータは情報漏れのない対策を十分に施したコンピュータを使用して、外部記憶媒体に記録し、外部記憶媒体は鍵をかけて厳重に保管し、紛失、盗難などのないように管理します。\n\u003Cp\u003Eまた、いただいたデータは2038年3月31日まで保存します。期限後は速やかに保存されている外部記憶媒体の物理的破壊によって、完全に破棄します。"
            },
            {
              "required": true,
              "type": "text",
              "title": "８．本研究の意義",
              "content": "\u003Cp\u003Eこの研究に参加することによって、あなたに直接的な便益はありませんが、今後の心理言語学や言語処理に関する認知心理学の研究の発展に寄与するとともに、第二言語学習における教育的、実践的応用につながる可能性があります。"
            },
            {
              "required": true,
              "type": "text",
              "title": "９．研究に関する資料の開示",
              "content": "\u003Cp\u003Eご希望があれば、他の対象者の個人情報保護や本研究の独創性の確保に支障がない範囲で、本研究の研究計画および研究方法、研究により得られた成果についての資料を開示いたします。また、本研究に関するご質問がありましたらいつでもお尋ね下さい。"
            },
            {
              "required": true,
              "type": "text",
              "title": "10．研究の実施費用",
              "content": "\u003Cp\u003E本研究にかかる費用は特に発生せず、研究経費からの支出はありません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "11．利益相反",
              "content": "\u003Cp\u003E本研究の実施にあたり、本研究を実施する者に利益相反はありません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "12．研究参加への謝礼",
              "content": "\u003Cp\u003E本研究への参加に際して、謝礼はございません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "13．知的財産権の帰属",
              "content": "\u003Cp\u003E本研究の成果により特許権等の知的財産権が生じる可能性がありますが、その権利は本研究の責任機関である明治学院大学に属し、対象者の方には属しません。"
            },
            {
              "required": true,
              "type": "text",
              "title": "14．問い合わせ先",
              "content": "\u003Cp\u003E担当者：SHEN MURONG \n\u003Cp\u003E所属：明治学院大学　心理学部　心理学科　4年 \n\u003Cp\u003E住所：〒108-8636 東京都港区白金台1-2-37\n\u003Cp\u003E電話番号：03-5421-5364（金城ゼミ研究室） \n\u003Cp\u003Ee-mail：22ps1012@meijigakuin.ac.jp "
            },
            {
              "required": true,
              "type": "checkbox",
              "label": "以上の内容をよくお読みいただき、ご理解いただいたうえで本研究に参加することに同意していただける場合は、以下の選択肢のうち「同意する」を選択し「次へ」ボタンをクリックしてください。同意いただけない場合は、ESCを押した後，ウィンドウを閉じてください。",
              "options": [
                {
                  "label": "同意する",
                  "coding": "informedConsent"
                }
              ],
              "name": "esc"
            }
          ],
          "scrollTop": true,
          "submitButtonText": "次へ",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Page"
        },
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
          "type": "lab.html.Form",
          "content": "\u003Cmain class=\"content-horizontal-center content-vertical-center\"\u003E\n  \u003Cdiv class=\"w-l text-left\" style=\"display: block\"\u003E\n    \n    \u003Ch2 class=\"text-center\"\u003E研究のために、あなたについていくつか教えてください。\n\n\u003C\u002Fh2\u003E\n    \u003Cp class=\"text-center\"\u003Eご記入いただいた情報は、実験結果の分析以外の目的では使用されず、\n個人が特定されることは一切ありません。\u003C\u002Fp\u003E\n    \n    \u003Cform id=\"demography\"\u003E\n      \u003Ctable\u003E\n        \u003C!-- Age --\u003E\n        \u003Ctr style=\"height: 50px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            あなたの年齢を教えてください。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"age\" type=\"number\" required class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \n        \u003C!-- Gender identity, following Tate et al. (2013) --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            あなたの性別に当てはまるものを選択してください。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"gender\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"Female\"\u003E女性\u003C\u002Foption\u003E\n              \u003Coption value=\"Male\"\u003E男性\u003C\u002Foption\u003E\n              \u003Coption value=\"Other\"\u003Eその他\u003C\u002Foption\u003E\n              \u003Coption value=\"no answer\"\u003E回答しません\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Language identity --\u003E\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd class=\"font-weight-bold\"\u003E\n            あなたの母語を教えてください。\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"Language\" required class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"JA\"\u003E日本語\u003C\u002Foption\u003E\n              \u003Coption value=\"CH\"\u003E中国語\u003C\u002Foption\u003E\n              \u003Coption value=\"OT\"\"\u003Eその他\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        \u003C!-- Birth-assigned gender category, following Tate et al.\n          \u003Ctr style=\"height: 100px\"\u003E\n            \u003Ctd\u003E\n              Which gender were you assigned at birth?\n            \u003C\u002Ftd\u003E\n            \u003Ctd\u003E\n              \u003Cselect style=\"width: 200px\" name=\"gender-birth\"\u003E\n                \u003Coption value=\"\" selected\u003E\n                  -- Please click to select --\n                \u003C\u002Foption\u003E\n                \u003Coption value=\"female\"\u003EFemale\u003C\u002Foption\u003E\n                \u003Coption value=\"male\"\u003EMale\u003C\u002Foption\u003E\n                \u003Coption value=\"intersex\"\u003EIntersex\u003C\u002Foption\u003E\n              \u003C\u002Fselect\u003E\n            \u003C\u002Ftd\u003E\n          \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Education\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            Please specify your highest degree:\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cselect name=\"education\" class=\"w-100\"\u003E\n              \u003Coption value=\"\" selected\u003E\n                -- Please click to select --\n              \u003C\u002Foption\u003E\n              \u003Coption value=\"no\"\u003Eno degree\u003C\u002Foption\u003E\n              \u003Coption value=\"highschool\"\u003EHigh school diploma\u003C\u002Foption\u003E\n              \u003Coption value=\"bachelor\"\u003EBachelor's\u003C\u002Foption\u003E\n              \u003Coption value=\"master\"\u003EMaster's\u003C\u002Foption\u003E\n              \u003Coption value=\"phd\"\u003EPhD\u003C\u002Foption\u003E\n            \u003C\u002Fselect\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Occupation\n        \u003Ctr style=\"height: 100px\"\u003E\n          \u003Ctd\u003E\n            What is your occupation, or if you still study, your field?\n          \u003C\u002Ftd\u003E\n          \u003Ctd\u003E\n            \u003Cinput name=\"occupation\" class=\"w-100\"\u003E\n          \u003C\u002Ftd\u003E\n        \u003C\u002Ftr\u003E\n        --\u003E\n\n        \u003C!-- Column balance --\u003E\n        \u003Ccolgroup\u003E\n          \u003Ccol style=\"width: 45%\"\u003E\n          \u003Ccol style=\"width: 65%\"\u003E\n        \u003C\u002Fcolgroup\u003E\n      \u003C\u002Ftable\u003E\n    \u003C\u002Fform\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cbutton type=\"submit\" form=\"demography\"\u003EContinue &rarr;\u003C\u002Fbutton\u003E\n\u003C\u002Ffooter\u003E",
          "parameters": {},
          "responses": {
            "": ""
          },
          "messageHandlers": {},
          "title": "Demography form",
          "files": {}
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
          "files": {
            "girl_sitting.png": "embedded\u002F76a6fde5b9db55d8cc4c977a8001529b8e7751c9ed8be0d5782d83e93e8660a3.png",
            "girl_standing.png": "embedded\u002Fe86bd5f02f20965928972ef994b770e3fcafdb139a6b8747974d60a3314bae68.png",
            "box_closed.png": "embedded\u002Fc32ccc2d5270b90f08a07bcb666b454408274818cc036347c61dd78c1c40f433.png",
            "box_open.png": "embedded\u002F6f61a711f39c87844bd34b5d1cecb2a6b7fe58f19cb077e607f00e05673a8cf9.png"
          },
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
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
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
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "立って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_standing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女の子は",
                  "sentence2": "座って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "girl_sitting.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "箱は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "box_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
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
          "files": {
            "man_running.png": "embedded\u002F47464c417b0e4cae721a939679157d94c0cb4f74f83a4b6df8b1ceb2cf2d4bd4.png",
            "man_swimming.png": "embedded\u002F8e16e57d0414c21f5faef3ba3a1b5ec412850b833c8c08871a1f46b003c3f80d.png",
            "book_closed.png": "embedded\u002F8cda40f5087030ef8f3eea8dfdc4c604bed73f88f48f4f0206cecf5cddfe926e.png",
            "book_open.png": "embedded\u002F8fc5f60561910d03dc348de985f4ad9e0775158661f63b471c4394d3b3d27e4e.png",
            "woman_cleaning.png": "embedded\u002F6808ea150cb40c315658fedcfa6a755268ce0dfd41b159432354e6fd7c8f7a9f.png",
            "woman_cooking.png": "embedded\u002Fd0b1953fca9f39cfe8c8264ead0fe8e6db3dda9587a731255e95b6e880a650e7.png",
            "man_calling.png": "embedded\u002Fbe12e13235b7562dc5494bc437efc9e6b04321535fed6be555b117014fb73198.png",
            "man_driving.png": "embedded\u002Fd9fcaa4d5c13d0dedb6ef383085d3d3fbbe09a2be0a4c4e71e204fdf249852d0.png",
            "woman_singing.png": "embedded\u002F663abd7fd95a94c827ac34e11a08deae40a1b303d925e801ef62819d820cf771.png",
            "woman_dancing.png": "embedded\u002F22a6d23689f647c1a7256d9691cc1d426625698d8b204017dd313b5d48d1c1f0.png",
            "cat_playing.png": "embedded\u002F615ada0df67f9b362f5fa1ba7063ae4639c4617496e783f6f05ca1d9d56abf00.png",
            "cat_sleeping.png": "embedded\u002Ff58b0e9354939d8fd90bc2dcd10159845f85ad70e8885a5251f1652aee17e779.png",
            "dog_barking.png": "embedded\u002Fb85fa15c9b787ba3fe36d8e4c9576c92e395431ca4f3cdb1b9566e13d6fb5210.png",
            "open_window.png": "embedded\u002F7c3895e516484ddd2b36fbbb441d937feb367f991e6168e5dc6d5c5349c1e39e.png",
            "closed_window.png": "embedded\u002Fc2172749bd995857ab57260fb8e69d91ffb3931a1d9f634bf06c79d0f00032b0.png",
            "open_door.png": "embedded\u002Fa1f3004ec567700aa9385f5656402d7441ca220c85bf78ff87f03da68c9aee31.png",
            "closed_door.png": "embedded\u002Fcbb2863892b8b0472418fc3b59dbdb27927e4c2cb64e92cd201775ab648b3645.png",
            "awake.png": "embedded\u002F2202cc3ac77c6bf5e47310965d2c732a50f1c8c3f583079937ad02f5a3f1ee55.png",
            "sleep.png": "embedded\u002F7d3eeca415af3b8e397e95f4429b20e891971abb9d91bc495b9daa51527dbed8.png",
            "umbrella_closed.png": "embedded\u002Fd74395c29eba7ac991a1530c6e31eef04b9e85ee83b4d9072855dedbfc776171.png",
            "umbrella_open.png": "embedded\u002F02babb519cc4f1559f48bd71f225623512ef2a384615e65d114feee722014c4d.png",
            "dog_eating.png": "embedded\u002F10c8cce9351e57e5e6903efffe7571de39f4f2d835c5ceac207d7c38e8fc3118.png",
            "light_on.png": "embedded\u002F19010ef5f47cb9a0a81d16f9188b0d68b419752d4021d2ec285aa13c228ba751.png",
            "light_off.png": "embedded\u002Fa005b9773c7dba86858d660a35c3efa51b3347cfdfee869bdacc06ac779c1cfc.png"
          },
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
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "open_door.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "ドアは",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "closed_door.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "ついて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "light_on.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "電気は",
                  "sentence2": "消えて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "light_off.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "open_window.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "窓は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "closed_window.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "走って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "走って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "走って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "走って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "泳いで",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "泳いで",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "泳いで",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_running.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "男性は",
                  "sentence2": "泳いで",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_swimming.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "踊って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "踊って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "踊って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "踊って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "歌って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "歌って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "歌って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_dancing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "女性は",
                  "sentence2": "歌って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_singing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "眠って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "眠って",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "眠って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "眠って",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "遊んで",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "遊んで",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "遊んで",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "cat_sleeping.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子猫は",
                  "sentence2": "遊んで",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "cat_playing.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop250",
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
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "sentence1": "子供は",
                  "sentence2": "眠って",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "眠って",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "眠って",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "眠って",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "起きて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "起きて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "起きて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "sleep.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子供は",
                  "sentence2": "起きて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "awake.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "book_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "絵本は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "book_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "開いて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "開いて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "閉じて",
                  "sentence3": "いる",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "umbrella_open.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "傘は",
                  "sentence2": "閉じて",
                  "sentence3": "いない",
                  "stimili": "binary",
                  "image": "umbrella_closed.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "料理して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "料理して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "料理して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "料理して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "掃除して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "掃除して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "掃除して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_cooking.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "母親は",
                  "sentence2": "掃除して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "woman_cleaning.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "運転して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "運転して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "運転して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "運転して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "電話して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "電話して",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "電話して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_driving.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "父親は",
                  "sentence2": "電話して",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "man_calling.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "食べて",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "食べて",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "食べて",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "食べて",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "吠えて",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "真肯定",
                  "correct": "F",
                  "AorN": "A"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "吠えて",
                  "sentence3": "いる",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "偽肯定",
                  "correct": "J",
                  "AorN": "A"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "吠えて",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "dog_eating.png",
                  "cond": "真否定",
                  "correct": "F",
                  "AorN": "N"
                },
                {
                  "sentence1": "子犬は",
                  "sentence2": "吠えて",
                  "sentence3": "いない",
                  "stimili": "multary",
                  "image": "dog_barking.png",
                  "cond": "偽否定",
                  "correct": "J",
                  "AorN": "N"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": ""
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Loop_1500",
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
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "content": "最後にいくつかの質問があります。以下の質問文を読んでいただき，あたなにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。\n回答し終わったら、「Continue」ボタンを押して、次のページに進みます。"
            },
            {
              "required": true,
              "type": "radio",
              "label": "1. 今回の課題の難易度について教えてください。",
              "options": [
                {
                  "label": "とても易しかった",
                  "coding": "1"
                },
                {
                  "label": "やや易しかった",
                  "coding": "2"
                },
                {
                  "label": "どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "やや難しかった",
                  "coding": "4"
                },
                {
                  "label": "とても難しかった",
                  "coding": "5"
                }
              ],
              "name": "1."
            },
            {
              "required": true,
              "type": "radio",
              "label": "2. 課題を正しくできたと思いますか。",
              "options": [
                {
                  "label": "まったくできなかった",
                  "coding": "1"
                },
                {
                  "label": "あまりできなかった",
                  "coding": "2"
                },
                {
                  "label": "どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "だいたいできた",
                  "coding": "4"
                },
                {
                  "label": "とてもよくできた",
                  "coding": "5"
                }
              ],
              "name": "2."
            },
            {
              "required": true,
              "type": "radio",
              "label": "3. 実験課題に集中できたと思いますか。",
              "options": [
                {
                  "label": "まったく集中できなかった",
                  "coding": "1"
                },
                {
                  "label": "あまり集中できなかった",
                  "coding": "2"
                },
                {
                  "label": "どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "だいたい集中できた",
                  "coding": "4"
                },
                {
                  "label": "とても集中できた",
                  "coding": "5"
                }
              ],
              "name": "3."
            },
            {
              "required": true,
              "type": "radio",
              "label": "4. 実験課題を行っている間に、どのくらい疲れを感じましたか。",
              "options": [
                {
                  "label": "まったく疲れなかった",
                  "coding": "1"
                },
                {
                  "label": "あまり疲れなかった",
                  "coding": "2"
                },
                {
                  "label": "どちらともいえない",
                  "coding": "3"
                },
                {
                  "label": "やや疲れた",
                  "coding": "4"
                },
                {
                  "label": "とても疲れた",
                  "coding": "5"
                }
              ],
              "name": "4."
            },
            {
              "required": true,
              "type": "radio",
              "label": "5. あなたは1年間に平均して何冊程度の本を読みますか？",
              "options": [
                {
                  "label": "０冊",
                  "coding": "1"
                },
                {
                  "label": "１〜４冊",
                  "coding": "2"
                },
                {
                  "label": "５〜１０冊",
                  "coding": "3"
                },
                {
                  "label": "１１〜２０冊",
                  "coding": "4"
                },
                {
                  "label": "２１冊以上",
                  "coding": "5"
                }
              ],
              "name": "5.-1"
            },
            {
              "required": true,
              "type": "likert",
              "items": [
                {
                  "label": "国・自治体からのお知らせ",
                  "coding": "Q1"
                },
                {
                  "label": "メディア・広報誌",
                  "coding": "Q2"
                },
                {
                  "label": "大学・職場からのお知らせ",
                  "coding": "Q3"
                },
                {
                  "label": "医療関係の文書",
                  "coding": "Q4"
                },
                {
                  "label": "説明書・マニュアル",
                  "coding": "Q5"
                }
              ],
              "width": "5",
              "anchors": [
                "\u003Cspan class=\"tategaki\"\u003Eまったく感じない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eあまり感じない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eどちらともいえない\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eやや感じる\u003C\u002Fspan\u003E",
                "\u003Cspan class=\"tategaki\"\u003Eとても感じる\u003C\u002Fspan\u003E"
              ],
              "label": "6. 以下の文書を読むとき、否定の文書がわかりにくいと感じることはありますか？（それぞれについてお答えください）",
              "name": "6."
            },
            {
              "required": false,
              "type": "textarea",
              "label": "6.1上記の文書以外で、日常生活や学習の中で否定文が分かりにくいと感じた経験があれば、具体的に教えてください。",
              "help": "（自由にご記入ください）",
              "name": "6.1"
            },
            {
              "required": true,
              "type": "textarea",
              "label": "7. 課題に答えるとき、どのように判断しましたか。特に意識した点があれば教えてください。",
              "help": "（自由にご記入ください）",
              "name": "7."
            },
            {
              "required": false,
              "type": "textarea",
              "label": "8. 実験全体についての感想や意見があれば教えてください。",
              "help": "（自由にご記入ください）",
              "name": "8."
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "right",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnaire"
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