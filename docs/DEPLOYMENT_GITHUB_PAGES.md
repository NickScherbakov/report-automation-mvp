# Развёртывание на GitHub Pages с кастомным доменом nopikreport.com

## Шаг 1: Обновить DNS записи в REG.RU

Откройте панель управления DNS для домена nopikreport.com в [REG.RU](https://reg.ru).

### Записи для изменения:

#### A-записи (IPv4)

**Для корневого домена `nopikreport.com`:**
Замените текущую A-запись (37.140.192.94) на ЧЕТЫРЕ записи:
```
Имя хоста: nopikreport.com.
TTL: 3600
Тип: A
Значение: 185.199.108.153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: A
Значение: 185.199.109.153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: A
Значение: 185.199.110.153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: A
Значение: 185.199.111.153
```

**Для поддомена `www.nopikreport.com` (опционально):**
Можно либо добавить те же четыре A-записи, либо заменить на CNAME:
```
Имя хоста: www.nopikreport.com.
TTL: 3600
Тип: CNAME
Значение: <ваш-логин>.github.io
```
(где `<ваш-логин>` — ваш GitHub username)

#### AAAA-записи (IPv6, опционально)

Если нужна поддержка IPv6, замените текущие AAAA-записи (2a00:f940:2:2:1:1:0:58) на:
```
Имя хоста: nopikreport.com.
TTL: 3600
Тип: AAAA
Значение: 2606:50c0:8000::153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: AAAA
Значение: 2606:50c0:8001::153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: AAAA
Значение: 2606:50c0:8002::153

Имя хоста: nopikreport.com.
TTL: 3600
Тип: AAAA
Значение: 2606:50c0:8003::153
```

### Записи, которые нужно ОСТАВИТЬ:

```
Имя хоста: nopikreport.com.
TTL: 3600
Тип: MX
Значение: mx1.hosting.reg.ru. (приоритет 10)

Имя хоста: nopikreport.com.
TTL: 3600
Тип: MX
Значение: mx2.hosting.reg.ru. (приоритет 20)

Имя хоста: nopikreport.com.
TTL: 3600
Тип: TXT
Значение: v=spf1 ip4:37.140.192.94 a mx include:_spf.hosting.reg.ru ~all

Имя хоста: nopikreport.com.
TTL: 3600
Тип: TXT
Значение: _globalsign-domain-verification=vj0tlQisOjYlsT4qQwkmz42Eax2gIuhSH6E5fTV_PZ
```

### Записи, которые можно удалить (если они не используются):

```
ftp.nopikreport.com.
mail.nopikreport.com.
smtp.nopikreport.com.
pop.nopikreport.com.
billing-ping.nopikreport.com.
```

---

## Шаг 2: Настроить GitHub Pages в репозитории

1. Перейдите в репозиторий на GitHub
2. Settings → Pages (слева в меню)
3. **Build and deployment:**
   - Source: Deploy from a branch
   - Branch: `main` | Folder: `/ (root)` → нажмите Save
4. **Custom domain:**
   - Введите: `nopikreport.com`
   - Нажмите Save
5. Включите опцию "Enforce HTTPS" (автоматически активируется через 5-10 минут)

---

## Шаг 3: Проверить развёртывание

После того как DNS обновятся (обычно до 24 часов, чаще всего 15-30 минут):

```bash
# Проверить разрешение домена
nslookup nopikreport.com

# Или с помощью curl
curl -I https://nopikreport.com

# Должно вернуть:
# HTTP/2 200
# Загружаются стили, скрипты, изображения
```

---

## Шаг 4: CI/CD автоматизация

GitHub Actions автоматически развёртывает изменения при пуше в `main`:

- Workflow: `.github/workflows/static.yml`
- Артефакт: содержимое каталога `/docs`
- Адрес: `https://nopikreport.com`

При каждом пуше в `main` изменения автоматически появятся на сайте (в течение 1-5 минут).

---

## Файлы конфигурации

- **[docs/CNAME](../docs/CNAME)** — файл, который GitHub Pages использует для подтверждения кастомного домена
- **[.github/workflows/static.yml](.github/workflows/static.yml)** — GitHub Actions workflow для развёртывания

---

## Возможные проблемы

| Проблема | Решение |
|----------|---------|
| Домен не работает | Дождитесь пропагации DNS (up to 24h), проверьте `nslookup nopikreport.com` |
| HTTPS не включён | GitHub Pages включает SSL автоматически через 5-10 минут после DNS проверки |
| Сайт показывает 404 | Убедитесь, что файлы есть в `/docs`, CNAME прочитан правильно |
| Старая версия показывается | Очистите браузерный кэш (Ctrl+Shift+Delete) или откройте приватное окно |

---

## Контактная информация

Для вопросов по DNS: поддержка REG.RU (в панели управления)  
Для вопросов по GitHub Pages: [GitHub Docs](https://docs.github.com/en/pages)

