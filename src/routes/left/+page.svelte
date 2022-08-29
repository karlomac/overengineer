<script>
    // @ts-nocheck

    import { leftRotation } from '../+page';

    function rotateIt(d, arr) {
        let x = 0
        let arrx = [];
        let first = 0;
        arrx = arr;
        for(x = 1; x <= d; x++){
            first = arrx.shift()
            arrx.push(first);
        }
        return arrx
    }

</script>

<h1 class="text-3xl font-weight-bold text-center my-3">Left Rotation</h1>

<div class="text-center w-5/6 mx-auto my-3">
    <p>
        This solution is simple that it takes the rotation in a loop.
        Inside the loop the first element of the array is extracted and the rest of the array
        shifted. The extracted array is then pushed at the end of the array.  This cycle
        continues until it completes via the supplied number of cycles.
    </p>
    <table class="table-auto text-left w-full my-3">
        <thead>
          <tr>
            <th>Computed Results</th>
            <th>Expected Output</th>
            <th>Rotation</th>
          </tr>
        </thead>
        <tbody>
            {#each leftRotation as lr}
            <tr>
                <td>{rotateIt(lr.d, lr.arr)}</td>
                <td>{lr.expectedOutput}</td>
                <td>{lr.d}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>