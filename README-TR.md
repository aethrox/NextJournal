# **NextJournal - Modern Bir Blog Platformu**

**NextJournal**, modern bir blog platformu olarak geliştirilmiştir. Bu proje, **Next.js**, **React**, **TailwindCSS**, **Prisma**, **PostgreSQL**, **NextAuth.js**, ve **TypeScript** gibi teknolojileri kullanarak güçlü bir tam-stack uygulama sağlar. Kullanıcılar blog yazılarını görüntüleyebilir, kendi yazılarını oluşturabilir ve oturum açarak yorum yapabilir.

## **İçindekiler**
- [Özellikler](#özellikler)
- [Kullanılan Teknolojiler](#kullanılan-teknolojiler)
- [Kurulum](#kurulum)
- [Ortam Değişkenleri](#ortam-değişkenleri)
- [Veritabanı Migrasyonları](#veritabanı-migrasyonları)
- [Proje Yapısı](#proje-yapısı)
- [Deployment](#deployment)

## **Özellikler**
- Blog yazılarını listeleme ve detaylarını görüntüleme
- Kullanıcı oturumu açma, kayıt olma ve kimlik doğrulama (NextAuth.js ile)
- Blog yazıları oluşturma, güncelleme ve silme
- Yorum yapma ve yorumları görüntüleme
- TailwindCSS ile modern ve responsive tasarım
- Prisma ORM kullanarak Postgres veritabanı yönetimi

## **Kullanılan Teknolojiler**
- [Next.js](https://nextjs.org/) - React tabanlı tam-stack web uygulama framework'ü
- [React.js](https://reactjs.org/) - Kullanıcı arayüzü geliştirme kütüphanesi
- [TailwindCSS](https://tailwindcss.com/) - CSS utility-first framework
- [Prisma](https://www.prisma.io/) - Veritabanı ORM aracı
- [PostgreSQL](https://www.postgresql.org/) - Veritabanı sistemi
- [NextAuth.js](https://next-auth.js.org/) - Kimlik doğrulama için kullanılan çözüm
- [Vercel](https://vercel.com/) - Uygulamanın barındırılması için kullanılan platform
- [TypeScript](https://www.typescriptlang.org/) - JavaScript'e tip güvenliği ekleyen dil

## **Kurulum**
Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

1. Bu repoyu klonlayın:
    ```bash
    git clone https://github.com/kullaniciadi/NextJournal.git
    cd NextJournal
    ```

2. Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```

3. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin (aşağıdaki bölüme bakın).

4. Veritabanı migrasyonlarını çalıştırın:
    ```bash
    npx prisma migrate dev
    ```

5. Geliştirme sunucusunu başlatın:
    ```bash
    npm run dev
    ```

6. Proje yerel olarak `http://localhost:3000` adresinde çalışacaktır.

## **Ortam Değişkenleri**
Aşağıdaki ortam değişkenlerini `.env` dosyanıza eklemeniz gerekmektedir:

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## **Veritabanı Migrasyonları**
Prisma ORM kullanarak veritabanı yapınızı güncellemek için şu komutu kullanın:
```bash
npx prisma migrate dev
```

## **Proje Yapısı**
- **prisma/**: Veritabanı şemaları ve Prisma ayarları
- **src/components/**: Reusable React bileşenleri
- **src/pages/**: Next.js sayfaları ve API rotaları
- **src/lib/**: Yardımcı fonksiyonlar ve veritabanı bağlantıları
- **src/styles/**: TailwindCSS ve diğer stil dosyaları
- **public/**: Statik dosyalar (görseller, favicon vb.)

## **Deployment**
Bu projeyi Vercel'de dağıtmak için Vercel'in rehberini izleyin:

1. Vercel hesabı oluşturun veya giriş yapın.
2. Projenizi Vercel'e deploy edin.
3. Ortam değişkenlerini Vercel'de yapılandırın.
