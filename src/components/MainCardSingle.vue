<script setup>
import { faker } from '@faker-js/faker'

const firstname = faker.person.firstName()
const lastname = faker.person.lastName()
const fullname = faker.person.fullName({firstName: firstname, sex: 'male', lastName: lastname})
const birthdate = faker.date.birthdate({ mode: 'year', min: 1980, max: 2004})
const email = faker.internet.email()
const bio = faker.lorem.paragraph(1)
const username = faker.internet.userName({ firstName: firstname, sex: 'male', lastName: lastname }).toLowerCase()
const phone = faker.phone.number({style: 'national'})

</script>

<template>
    <!-- {{ fullname }} <br /> -->

        <div class="border border-gray-900 rounded-lg shadow bg-gray-300 h-full">
            <img :src="faker.image.avatar({width: 640, height: 480})" class="rounded-t-xl" />
            <div class="p-4">
                <p class="mb-2 text-2x1 font-bold px-3">Name: {{ fullname }}</p>
                <p class="mb-2 font-normal text-gray-800 px-3">Birthday: {{ birthdate }}</p>
                <p class="mb-2 font-normal text-gray-800 px-3">Email: {{ email }}</p>
                <p class="mb-2 font-normal text-gray-800 px-3">About: {{ bio }}</p>
                <p class="mb-2 font-normal text-gray-800 px-3">Phone: {{ phone }}</p>            
            </div>
        </div>
   
</template>