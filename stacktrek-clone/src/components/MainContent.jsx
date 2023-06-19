import React from 'react'
const inbox=[{
   sender:"Facebook.com",
   content: "New friend suggestion",
},
{
   sender:"Gmail.com",
   content: "Verification code",
},
{
   sender:"Jobstreet.com",
   content: "Available job",
},
{
   sender:"Cris Vincent",
   content: "Hi",
},

]
function MainContent() {
  return (
    <>
    <div class="p-4 sm:ml-64">
   <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <div class="flex h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            
      </div>
      <button className='p-4'><h2>Primary</h2></button>
      <button className='p-4'><h2>Promotion</h2></button>
      <button className='p-4'><h2>Socials</h2></button>
      <div class="relative overflow-x-auto">
         <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               
            </thead>
            <tbody>
               {inbox.map(({sender, content})=>(
                  <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                     {sender}
                  </th>
                  <td class="px-6 py-4">
                     {content}
                  </td>
               </tr>
               ))}
                  
            </tbody>
         </table>
      </div>
   </div>
</div>
    </>
  )
}

export default MainContent