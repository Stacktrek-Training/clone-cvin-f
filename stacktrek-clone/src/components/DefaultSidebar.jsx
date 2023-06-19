import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, } from 'react-icons/hi';


const sidebarItems = [{
        text:"Inbox",
        link:"#",
        i:{HiInbox},
},
{
    text:"Snoozed",
        link:"#",
        i:{HiChartPie},
},{
    text:"Sent",
        link:"#",
        i:{HiArrowSmRight},
},{
    text:"Drafts",
        link:"#",
        i:{HiInbox},
},{
    text:"More",
        link:"#",
        i:{HiInbox},
}
]
 function DefaultSidebar() {
  return (
    <>
        <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul class="space-y-2 font-medium">
                {sidebarItems.map(({text, link, i})=> (
                            <li>
                                <a href={link} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                    
                                    <span class="flex-1 ml-3 whitespace-nowrap">{text}</span>
                                </a>
                        </li>
                        ))}
                    
                </ul>
            </div>
        </aside>
    </>
  )
}

export default DefaultSidebar