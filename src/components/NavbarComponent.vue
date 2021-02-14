<template>
    <div id="navbar-component">
        <nav>
            <ul>
                <div class="ml">
                    <svg id="Group_256" data-name="Group 256" xmlns="http://www.w3.org/2000/svg" width="33.388" height="29.247" viewBox="0 0 33.388 29.247">
                        <g id="Group_254" data-name="Group 254">
                            <path id="Path_221" data-name="Path 221" d="M725.419,116.064a14.633,14.633,0,0,0-14.551-14.63v6.143a8.471,8.471,0,0,1,0,16.94v6.143a14.6,14.6,0,0,0,14.551-14.6" transform="translate(-692.031 -101.424)" fill="#fdc400"/>
                            <g id="Group_253" data-name="Group 253" transform="translate(0 0)">
                            <path id="Path_222" data-name="Path 222" d="M711.553,455.287a2.146,2.146,0,0,0-2.146-2.146h-.042v4.289h.042a2.146,2.146,0,0,0,2.146-2.146" transform="translate(-690.581 -440.759)" fill="#010148"/>
                            <path id="Path_223" data-name="Path 223" d="M175.371,432.346v17.6h18.837v-6.154H182.261v-5.619h7.389v-5.823H175.371Z" transform="translate(-175.371 -420.695)" fill="#010148"/>
                            <path id="Path_224" data-name="Path 224" d="M182.619,107.293h11.59v-6.154H175.373v6.154h7.246Z" transform="translate(-175.373 -101.139)" fill="#010148"/>
                            </g>
                        </g>
                    </svg>
                    <li>
                        <select name="categories" id="">
                            <option value="">Categories</option>
                            <option value="">Categories</option>
                            <option value="">Categories</option>
                        </select>
                    </li>

                    <li><a class="active" href="#">Courses</a></li>
                    <li><a href="#">Tracks</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Abouts</a></li>
                </div>
                <div class="mr">
                    <svg id="Original" xmlns="http://www.w3.org/2000/svg" width="22.092" height="22.227" viewBox="0 0 22.092 22.227">
                        <path id="Path_248" data-name="Path 248" d="M143.824,67.14h-.969l3.939-9.243h-15.58l-1.207-5.051h-4.495a.8.8,0,1,0,0,1.6.8.8,0,0,0,.651-.349h2.827l.905,3.8h-.016l2.271,9.434.048.175.175.731.048.191h11.4a1.406,1.406,0,1,1,0,2.811h-11.4v1.318h1.414a1.885,1.885,0,0,1,3.24,0h2.239a1.878,1.878,0,0,1,3.3,0h1.207a2.708,2.708,0,1,0,0-5.416Zm-2.446,0h-7.925l-1.906-7.925H144.92Z" transform="translate(-124.702 -52.846)" fill="#111245"/>
                        <g id="Group_258" data-name="Group 258" transform="translate(9.204 19.13)">
                            <path id="Path_249" data-name="Path 249" d="M133.594,66.44a1.549,1.549,0,0,1-3.1,0,1.531,1.531,0,0,1,.418-1.061,1.555,1.555,0,0,1,2.262,0A1.531,1.531,0,0,1,133.594,66.44Z" transform="translate(-130.497 -64.891)" fill="#fcc50c"/>
                        </g>
                        <g id="Group_259" data-name="Group 259" transform="translate(14.712 19.13)">
                            <path id="Path_250" data-name="Path 250" d="M137.062,66.44a1.549,1.549,0,1,1-3.1,0,1.531,1.531,0,0,1,.418-1.061,1.555,1.555,0,0,1,2.262,0A1.53,1.53,0,0,1,137.062,66.44Z" transform="translate(-133.965 -64.891)" fill="#fcc50c"/>
                        </g>
                    </svg>
                    <button class="get-started-btn">Get Started</button>
                    <router-link to="Login"><button class="login-btn">Login</button></router-link>
                    
                </div>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    @import '../assets/sass/main';
</style>