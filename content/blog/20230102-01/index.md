---
title: ドメインレジストラを変更した
date: "2023-01-02T21:35:00+09:00"
description: "ドメインレジストラをバリュードメインから Google Domains に変更しました。"
tags: ["ドメイン"]
draft: false
---

2014年にバリュードメインで取得した [primenon.com](https://www.primenon.com) を Google Domains に変更しました。

バリュードメインは GMO インターネットが運営していて、更新料がバカ高いわけでもないし、変更するメリットが無かったので毎年なんとなく更新してました。

今回、変更しようと思ったきっかけは、Google がドメインレジストラを始めたというニュースを見たからです。日本で開始したのは2022年3月で、ちょうどドメインの更新が3月だったので、次こそはと考えていました。

* [Googleのドメインサービス、日本でも提供開始](https://www.itmedia.co.jp/news/articles/2203/16/news142.html)

バリュードメインを長年使ってきた感想としては

* 良いところ
    * 価格は高くはなく、安くもなく、平均的
    * 新規取得なら安い
* 悪いところ
    * 更新価格は高い
    * [2023年からサービス維持調整費導入](https://www.value-domain.com/information/detail/?no=20221226-1)
    * 長期利用者にメリットがない（大量にドメインがある人だけ）
    * 上部に常時表示されるバナーが邪魔
    * 管理画面が使いにくい、分かりにくい

![](./screenshot_2023-01-02_162155.png)

## 移行方法

移行方法は、まったくそのままの説明しているブログがあったのでそちらを参考に。

* [バリュードメインから Google Domains へのドメイン移管方法](https://gotohayato.com/content/504/)

体感で、トランスファー申請から移行完了まで1時間かからないくらいでした。
移行で必要な料金は、 `.com` ドメインなら 1,400円（税別）を Google に支払っただけです。
バリュードメインには何も払っていません。

機能は、一般的なものばかりです。

* プライバシー保護（Whois代行） - ドメイン所有者情報を肩代わりしてくれる、無料
* ダイナミックDNS
* ドメインロック
* リソースレコード - `primenon.com` を Github Pages に向けさせる機能

Google だから出来る機能

* Google Search Console と連携した情報取得（クリック数、インプレッション数とか）
* Google Workspace と連携すればメールアドレスを作成可能
* DNSREC（Domain Name System Security Extensions）が無料で利用できる
* リソースレコードの前ドメインレジストラから引き継ぎできる（引き継がないこともできる）

## Google Domains 特典

あとは、上記のブログでも書かれていてあとから「そういうことか」と思ったことが1点。

バリュードメインの有効期限は2023年3月までありました。Google Domains への移行は2023年1月1日に行いました。
単純に考えると、次の更新は2024年1月1日になるはずですが、Google Domains はバリュードメインの有効期限の3月まで延長してくれたので、次の更新日は2024年3月です。

つまり、2022年3月にバリュードメインで更新したときに Google Domains に移行しても良かったみたいです。
Goole Domains は JP ドメインが4000円するので、保有するドメインによっては割高みたいです。昔、JPドメインを持ってましたが、新規は安いけど更新が高いのでやめました。

さよなら、GMOインターネット。