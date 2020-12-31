<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>Numero de MapState en el Padre {{ numero }}</h2>
        <button class="btn btn-primary" type="button" @click="GetCursos" >Obtener curso</button>
        <ul v-for="item of cursos" :key="item.id">
            <li>{{ item.title }}</li>
        </ul>
        <Hijo></Hijo>
    </div>
</template>

<script type="text/javascript"  src="./../Scripts/padre.js"></script>

<style src="./../Styles/CSS/padre.css" scoped></style>