<style>

</style>

<div class="font-FiraCode h-full w-full flex justify-center items-center">
    <div class="w-3/4 h-3/4 rounded-3xl bg-contactWave bg-no-repeat bg-white flex flex-row overflow-clip">
        <div class="w-1/2 h-full flex justify-center items-center flex-row">
            <img src="contactSVG.svg" alt="Contact" width="" height="" class="">
            <hr class="border-r-indigo-400 border-r-4">
        </div>
        <div class="w-1/2 h-full flex mt-32 items-center flex-col">
            <h1 class="text-3xl font-extrabold text-black">Contact Me</h1>
            <form class="w-full h-full px-12 ">
                <div class="flex flex-row gap-12">
                    <div class="flex flex-col w-1/2">
                        <label for="name" class="text-2xl text-black">Name</label>
                        <input type="text" name="name" id="name" class="border-2 border-black bg-gray-200 text-black rounded-2xl p-2">
                    </div>
                    <div class="flex flex-col w-1/2">
                        <label for="email" class="text-2xl text-black">Email</label>
                        <input type="email" name="email" id="email" class="border-2 border-black bg-gray-200 text-black rounded-2xl p-2">
                    </div>
                </div>
                <div class="flex flex-col">
                    <label for="message" class="text-2xl text-black">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" class="flex-grow border-2 resize-none border-black bg-gray-200 text-black rounded-2xl p-2"></textarea>
                </div>
                <div class="flex flex-row justify-center py-4">
                    <button type="submit" class="bg-black text-white rounded-lg p-2 hover:bg-slate-900 w-1/2 lg:w-1/4">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>
