<script>
// @ts-nocheck

    import { findIntersection } from '../+page.js';
    import { checkIntersection } from 'line-intersect';


    // @ts-ignore
    function findIt(L1, L2) {
        const L1s = [{x: L1[0][0], y: L1[0][1] }, {x: L1[1][0], y: L1[1][1]}]
        const L2s = [{x: L2[0][0], y: L1[0][1] }, {x: L2[1][0], y: L2[1][1]}]

        let a = (L1s[0].y - L1s[1].y) / (L1s[0].x - L1s[1].x);
        let b = (L2s[0].y - L2s[1].y) / (L2s[0].x - L2s[1].x);

        let denominator = ( (L2s[1].y - L2s[0].y) * (L1s[1].x - L1s[0].x) - (L2s[1].x - L2s[0].x) * (L1s[1].y - L1s[0].y) )

        if ( denominator === 0) return -1

        let ua = ( (L2s[1].x - L2s[0].x) * (L1s[0].y - L2s[0].y) - (L2s[1].y - L2s[0].y) * (L1s[0].x - L2s[0].x)) / denominator;
        let ub = ( (L1s[1].x - L1s[0].x) * (L1s[0].y - L2s[0].y) - (L1s[1].y - L1s[0].y) * (L1s[0].x - L2s[0].x)) / denominator;

        if (ua < 0 || ua > 1 || ub < 0 || ub > 1) return -1;

        let x = L1s[0].x + ua * (L1s[1].x - L1s[0].x);
        let y = L1s[0].y + ua * (L1s[1].y - L1s[0].y);

        return x + y
    }

    function option2(L1, L2) {
        const L1s = [{x: L1[0][0], y: L1[0][1] }, {x: L1[1][0], y: L1[1][1]}]
        const L2s = [{x: L2[0][0], y: L1[0][1] }, {x: L2[1][0], y: L2[1][1]}]

        const result = checkIntersection(
            L1s[0].x, L1s[0].y, L1s[1].x, L1s[1].y,
            L2s[0].x, L2s[0].y, L2s[1].x, L2s[1].y
        )

        if(result.type === 'intersecting'){
            const res = result.point.x + result.point.y
            return res
        }

        return -1
        
    }

</script>

<h1 class="text-3xl font-weight-bold my-3 text-center">Find Intersection</h1>

<div class="text-center w-2/3 mx-auto">
    <p>
        This solution is based on the math by Paul Bourke, which was translated to javascript with
        the conversion of the input into the correct coordinates. <br>
        <span class="text-indigo-600">Note that line 3 in both solution shows 4 insted of 3.
            this may be due to the rounding affect of the computations.
        </span>
    </p>
    <table class="table-auto w-2/3 mx-auto my-3">
        <thead>
          <tr>
            <th>Computed Results</th>
            <th>Expected Output</th>
          </tr>
        </thead>
        <tbody>
            {#each findIntersection as fi}
            <tr>
                <td class="text-center">{JSON.stringify(findIt(fi.l1, fi.l2))}</td>
                <td class="text-center">{fi.expectedOutput}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<br><br>
<div class="text-center w-2/3 mx-auto">
    <h3 class="text-xl font-weight-bold my-3">Find Intersection Option 2</h3>
    <p>
        The purpose of this option is to show that by simple research i was able to find a plugin
        that allowed the computation of the intersection point without having to translate a complex
        formula to javascript
    </p>
    <table class="table-auto w-full my-3">
        <thead>
          <tr>
            <th>Option 2 Results</th>
            <th>Expected Output</th>
          </tr>
        </thead>
        <tbody>
            {#each findIntersection as fi}
            <tr>
                <td class="text-center">{JSON.stringify(option2(fi.l1, fi.l2))}</td>
                <td class="text-center">{fi.expectedOutput}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>
