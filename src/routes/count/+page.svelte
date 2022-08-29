<script>
// @ts-nocheck

    import { countInstances } from '../+page.js';

    function countIt( str, arr ){
        // split the string into array 
        let strArr = str.split(' ');

        // cycle the arr, filter and the length parameter returns the count 
        return arr.map(ele =>{
            return strArr.filter(e => e.toLowerCase() === ele.toLowerCase()).length
        })

    }

</script>

<h1 class="text-3xl font-weight-bold text-center my-3">Count Instances</h1>

<div class="text-center w-2/3 mx-auto my-3">
    <p>
        This solution uses the javascript functions Map and Filter to easily find and count
        the occurance of the given word array.
    </p>
    <table class="table-auto text-left w-full my-3">
        <thead>
          <tr>
            <th>Computed Results</th>
            <th>Strings to Find</th>
            <th>Expected Results</th>
          </tr>
        </thead>
        <tbody>
            {#each countInstances as ci}
            <tr>
                <td>{countIt(ci.str, ci.arr)}</td>
                <td>{ci.arr}</td>
                <td>{ci.expectedOutput}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>