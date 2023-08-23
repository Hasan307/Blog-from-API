import React from 'react';
import './contact.css';

const page = () => {
    return (

     <div>
      	<div class="content kachakachi">
		<h2>We Value</h2>
		<h2>We Value </h2>
        
	</div>
    <br /> 
		<h1 class="kachakachi lol" >Your Words</h1>
        <div class="align">
            
            <form>
                <div >
                  <label>Name</label>
                  <br />
                  <input type="text" class="rounded w-full py-2 px-4  focus:border-purple-500" />
                  <br />
                  <br />
                </div>
                <div class="flex-row">
                  <label>Email</label>
                  <br />
                  <input type="mail" class="rounded w-full py-2 px-4" />
                  <br />
                  <br />
                </div>

                <div class="">
                  <label class="m-0">Website</label>
                  <br />
                  <input type="text" class="rounded w-full py-2 px-4" />
                  <br />
                  <br />
                </div>

                <div class="flex-row">
                  <label>Messege</label>
                  <br />
                  <input type="text" class="rounded w-full py-2 px-4"/>
                  <br />
                  <br />
                </div>
                <button class="m-auto flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
      Send
    </button>
              </form>
        </div>
        </div>
    );
};

export default page;