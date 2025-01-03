import {clsx ,type ClassValue} from "clsx"
import {twMerge} from "tailwind-merge"
import React from 'react'

export function cn(...inputs: ClassValue[]){
return twMerge(clsx(inputs))
}