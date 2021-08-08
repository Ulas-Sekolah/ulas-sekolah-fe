import React from 'react'
import { Input, Button, Text } from '../../atoms'
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
          <input autoComplete="off" {...register("searchSchool")} type="text" className="focus:outline-none w-full font-medium opacity-30 font-medium" placeholder="Ketikan Sekolahmu" />
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Tingkat Sekolah
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <select {...register("levelSchool")} defaultValue="" placeholder="Pilih Tingkatan" className="focus:outline-none cursor-pointer w-full font-medium opacity-30 font-medium">
            {([{value: '', label: 'Select All'}, {value: 'sd', label: 'SD'}, {value: 'smp', label: 'SMP'}, {value: 'sma', label: 'SMA'}, {value: 'smk', label: 'SMK'}] || []).map(levelOption => (
              <option key={levelOption.value} value={levelOption.value}>
                {levelOption.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Kategori Sekolah
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <select {...register("levelSchool")} defaultValue="" placeholder="Pilih Kategori" className="focus:outline-none cursor-pointer w-full font-medium opacity-30 font-medium">
            {([{value: '', label: 'Select All'}, {value: 'negeri', label: 'Negeri'}, {value: 'swasta', label: 'Swasta'}] || []).map(kategoryOption => (
              <option key={kategoryOption.value} value={kategoryOption.value}>
                {kategoryOption.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Provinsi
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <select {...register("province")} defaultValue="" placeholder="Pilih Provinsi" className="focus:outline-none cursor-pointer w-full font-medium opacity-30 font-medium">
            {([{value: '', label: 'Select All'}, {value: 1, label: 'DKI Jakarta'}, {value: 2, label: 'Bandung'}, {value: 3, label: 'Yogyakarta'}, {value: 4, label: 'Surabaya'}] || []).map(provinceOption => (
              <option key={provinceOption.value} value={provinceOption.value}>
                {provinceOption.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      <label>
        <Text classText="font-medium mb-2 mt-4">
          Kota / Kabupaten
        </Text>
        <div className="border-gray border-4 p-2 rounded-lg">
          <select {...register("city")} defaultValue="" placeholder="Pilih Kabupaten" className="focus:outline-none cursor-pointer w-full font-medium opacity-30 font-medium">
            {([{value: '', label: 'Select All'}, {value: 11, label: 'Jakarta Timur'}, {value: 12, label: 'Jakarta Barat'}, {value: 13, label: 'Jakarta Utara'}, {value: 14, label: 'Jakarta Selatan'}] || []).map(cityOption => (
              <option key={cityOption.value} value={cityOption.value}>
                {cityOption.label}
              </option>
            ))}
          </select>
        </div>
      </label>
      <Button onClick={null} classButton="focus:outline-none mt-8 rounded-lg p-2 cursor-pointer w-full bg-blue-200">
        <span className="text-white ml-2 font-light text-base text-white font-medium">Cari Sekolahmu</span>
      </Button>
    </form>
  )
}
