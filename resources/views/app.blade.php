<!DOCTYPE html>
<html lang='Zh-cn'>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <title>{{config('app.name')}}</title>
</head>

<body>
    <div id="app">
        <router-view></router-view>
    </div>

</body>
<script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

</html>