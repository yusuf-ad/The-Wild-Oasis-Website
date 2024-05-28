# My notes

So basically each page in Next.js is simply a React component that we export from a page.js file which needs to be inside of some folder.

## How RSC works behind the scenes

## 1

### Geleneksel React Rendering (Traditional React Rendering)

1. **Bileşen Ağacı (Component Tree)**: Sanal DOM'a (Virtual DOM) render edilir.
2. **Gerçek DOM'a Taahhüt (Commit to Real DOM)**: Sanal DOM, gerçek DOM'a (Real DOM) taahhüt edilir.
3. **Sonuç (Result)**: Orijinal bileşen örneği ağacını temsil eden bir dizi DOM elemanı (DOM elements).

### React Sunucu Bileşenleri (React Server Components - RSC)

1. **Bileşen Ağacı (Component Tree)**: Hem sunucu (server) hem de istemci bileşenlerini (client components) içerir ve sunucuda (server) bulunur.
2. **İki Aşamalı Rendering (Two-Step Rendering)**:
   - **Aşama 1 (Step 1)**: Sadece sunucu bileşenleri (server components) render edilir. Sonuç, render edilmiş sunucu bileşenleri ve istemci bileşenleri için render edilmemiş alt ağaçları (un-rendered sub trees of client components) içeren bir sanal DOM'dur.
   - **RSC Yükü (RSC Payload)**: Render edilmiş sunucu bileşenlerini, istemci bileşenleri için yer tutucuları (placeholders), serileştirilmiş prop'ları (serialized props) ve bileşen kodunu içeren script'lerin URL'lerini (URLs) içerir.
3. **İstemci İşleme (Client Processing)**: RSC yükü istemciye (client) gönderilir.
   - **Aşama 2 (Step 2)**: İstemci bileşenleri, RSC yükündeki bilgiler kullanılarak render edilir.
4. **Son Adımlar (Final Steps)**: Bu noktadan itibaren süreç geleneksel React ile aynıdır, tam bir sanal DOM (virtual DOM) oluşturularak gerçek DOM'a taahhüt edilir.

### Önemli Gözlemler (Key Observations)

- **Akıcılık (Fluidity)**: Adımlar katı bir şekilde sıralı değildir; sunucuda render edilen bileşenler anında istemciye aktarılır ve ağaç içinde sorunsuz bir şekilde entegre edilir, bu da süreci kullanıcı için daha hızlı hale getirir.
- **Veri ve Durumun Fonksiyonu (Function of Data and State)**: UI oluşturma süreci ilk olarak verinin (data) ve ardından UI durumunun (UI state) fonksiyonu olarak gerçekleşir, bu da iki aşamalı render sürecini yansıtır.

### Sonuç (Conclusion)

- RSC, render sürecini sunucu ve istemci arasında böler ve bu iki ortam arasındaki bağlantıyı RSC yükü sağlar.
- İstemcideki nihai rendering, geleneksel React ile aynı olup, genel süreci daha verimli ama tanıdık hale getirir.

## 2

Elbette, işte bu uzun açıklamanın özetini Türkçe olarak İngilizce kavramlarla birlikte:

### React Sunucu Bileşenleri (React Server Components - RSC) ve Sunucu Tarafı Rendering (Server-Side Rendering - SSR)

#### Sunucu Tarafı Rendering (Server-Side Rendering - SSR) Temelleri

1. **Dinamik SSR (Dynamic SSR)**: HTML, her gelen istek için oluşturulur.
2. **Bileşen Ağacı (Component Tree)**: Render edilir ve sanal DOM'a (Virtual DOM) dönüştürülür.
3. **HTML Üretimi (HTML Generation)**: Sanal DOM'dan HTML üretilir ve istemciye (client) gönderilir.
4. **Hidrasyon (Hydration)**: HTML, etkileşimli hale getirilir. Bu, React kod paketinin (React bundle) tarayıcıya (browser) gönderilmesiyle gerçekleşir.

#### RSC ile SSR Nasıl Çalışır?

1. **Farklı Teknolojiler (Different Technologies)**: RSC ve SSR aynı şey değildir, ancak birlikte çalışabilirler.
2. **SSR ve RSC Birlikte Kullanımı (Combining SSR and RSC)**:
   - **SSR İşleyişi (SSR Operation)**: RSC olmadan SSR ile aynıdır. Bileşen ağacı HTML olarak render edilir ve tarayıcıya gönderilir.
   - **Sunucu ve İstemci Bileşenleri (Server and Client Components)**: Başlangıçta her iki bileşen türü de sunucuda render edilir.
3. **Sunucu ve İstemci Ortamları (Server and Client Environments)**:
   - **React Sunucu (React Server)**: Geleneksel anlamda bir web sunucusu olmak zorunda değildir, sadece tarayıcıdan farklı bir bilgisayardır.
   - **React İstemci (React Client)**: Geleneksel anlamda bir web tarayıcısı olmak zorunda değildir, rendered React uygulamasını tüketen bir protokol parçasıdır.
4. **Statik Site Üretimi (Static Site Generation)**: React sunucu bileşenleri teorik olarak web sunucusu gerektirmeden derleme zamanında render edilebilir.

#### RSC ve SSR Arasındaki Etkileşim (Interaction Between RSC and SSR)

1. **Başlangıç Renderi (Initial Render)**: İlk render sırasında hem sunucu hem de istemci bileşenleri sunucuda çalıştırılır ve HTML olarak render edilir.
2. **React Paketi (React Bundle)**: HTML'yi etkileşimli hale getirmek için React kütüphanesi ve bileşen kodları tarayıcıya gönderilir.
3. **RSC Yükü (RSC Payload)**: Render edilen sunucu bileşenlerini, istemci bileşenlerine geçirilen prop'ları ve istemci bileşenleri için gerekli URL'leri içerir.
4. **Hidrasyon (Hydration)**: HTML'yi etkileşimli hale getirir, yalnızca istemci bileşenleri hidrasyon işlemine tabi tutulur.

#### Özet (Summary)

- **SSR, RSC Olmadan (SSR Without RSC)**: Geleneksel SSR, bileşen ağacını HTML olarak render eder ve tarayıcıya gönderir.
- **RSC ile SSR (SSR with RSC)**: Başlangıç renderi sırasında hem sunucu hem de istemci bileşenleri sunucuda çalıştırılır. Daha sonra istemci bileşenleri tarayıcıda etkileşimli hale getirilir.
- **Devam Eden İşlem (Ongoing Process)**: İlk render sonrası, sunucu bileşenleri sadece web sunucusunda, istemci bileşenleri ise tarayıcıda çalışır.

Bu açıklamalar, RSC ve SSR teknolojilerinin nasıl etkileşimde bulunduğunu ve birlikte nasıl çalıştığını anlamamıza yardımcı olur.

## css styling

<!-- main will occupy the remaining part -->

```jsx
<html lang="en">
  <body
    className="{`${josefin.className}"
    flex
    min-h-screen
    flex-col
    bg-primary-950
    text-primary-100
    antialiased
    `}
  >
    <header />

    <div className="grid flex-1 px-8 py-12">
      <main className="mx-auto max-w-7xl">{children}</main>
    </div>
  </body>
</html>
```

object-cover
aspect-square

<!-- Using Image  -->

```jsx
<div className="col-span-2">
  <image
    src="{Img1}"
    alt="Family sitting around a fire pit in front of cabin"
    placeholder="blur"
    quality="{80}"
  />
</div>

<div className="relative col-span-2 aspect-square w-full">
  <image
    fill
    className="object-cover object-center"
    src="/about-2.jpg"
    alt="Family that manages The Wild Oasis"
  />
</div>
```

Only rendering errors will be caught in React Error Boundary
