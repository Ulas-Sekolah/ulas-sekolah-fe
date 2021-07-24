import React from 'react'
import { Input, Text } from '../../atoms'
import { useForm } from 'react-hook-form'

type FormSearch = {
  searchSchool: string
  levelSchool: string
  province: string
  city: string
}

export default function Footer() {
  const { register, handleSubmit } = useForm<FormSearch>()
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 z-50 shadow-xl col-span-1 rounded-lg bg-white">
      <label>
        <Text classText="font-medium mb-2">
          Mencari Sekolah
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <input {...register("searchSchool")} type="text" className="focus:outline-none w-full font-medium opacity-30 font-medium" placeholder="Ketikan Sekolahmu" />
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Tingkat Sekolah
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <input {...register("levelSchool")} type="text" className="focus:outline-none w-full font-medium opacity-30 font-medium" placeholder="Pilih Tingkatan" />
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Provinsi
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <input {...register("province")} type="text" className="focus:outline-none w-full font-medium opacity-30 font-medium" placeholder="Pilih Provinsi" />
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Kota / Kabupaten
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <input {...register("city")} type="text" className="focus:outline-none w-full font-medium opacity-30 font-medium" placeholder="Pilih Kabupaten" />
        </div>
      </label>
      <Input type="submit" classInput="mt-8 rounded-lg bg-blue-200 p-2 cursor-pointer w-full text-white font-medium bg-blue-200" />
    </form>
  )
}
