<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person.fullName()
const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const birthdate = faker.date.birthdate({ mode: 'year', min: 1980, max: 2004})
const email = faker.internet.email()
const bio = faker.lorem.lines(1)
const username = faker.internet.userName({firstName: firstname, lastName:lastname}).toLowerCase()

</script>

<template>
    <!-- {{ fullname }} <br /> -->
    <div class="border border-gray-900 rounded-lg shadow bg-gray-300 h-full">
        <img :src="faker.image.avatar({width: 640, height: 480, category: 'person'})"/>
        <div>
            <p class="mb-2 text-2x1 font-bold">{{ fullname }}</p>
            <p class="mb-2 font-normal text-gray-800">{{ birthdate }}</p>
            <p class="mb-2 font-normal text-gray-800">{{ email }}</p>
            <p class="mb-2 font-normal text-gray-800">{{ bio }}</p>
        </div>
    </div>
</template>