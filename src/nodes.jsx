const blueColor = "rgb(0, 80, 255)";
const purple1Color = "rgb(122, 75, 231)";
const purple2Color = "rgb(168, 69, 208)";
const purple3Color = "rgb(202, 63, 185)";
const pinkColor = "rgb(255, 46, 139)";

export default [
    // Level 1
    {
        id: 'l1',
        type: 'input',
        position: { x: 700, y: 0 },
        data: { label: 'Dependent Variable = Continuous' },
        style: { backgroundColor: blueColor },
    },


    // Level 2
    {
        id: 'l2-1',
        position: { x: 1100, y: 150 },
        data: { label: 'Independent Variable\'s Levels = Independent' },
        style: { backgroundColor: purple1Color },
    },
    {
        id: 'l2-2',
        position: { x: 300, y: 150 },
        data: { label: 'Independent Variable\'s Levels = Dependent' },
        style: { backgroundColor: purple1Color },
    },


    // Level 3
    {
        id: 'l3-1',
        position: { x: 1300, y: 300 },
        data: { label: 'Independent Variable\'s Levels = 2' },
        style: { backgroundColor: purple2Color },
    },
    {
        id: 'l3-2',
        position: { x: 900, y: 300 },
        data: { label: 'Independent Variable\'s Levels >= 3' },
        style: { backgroundColor: purple2Color },
    },
    {
        id: 'l3-3',
        position: { x: 500, y: 300 },
        data: { label: 'Independent Variable\'s Levels = 2' },
        style: { backgroundColor: purple3Color },
    },
    {
        id: 'l3-4',
        position: { x: 100, y: 300 },
        data: { label: 'Independent Variable\'s Levels >= 3' },
        style: { backgroundColor: purple3Color },
    },


    // Level 4
    {
        id: 'l4-1',
        type: 'output',
        position: { x: 1400, y: 450 },
        data: { label: 'Independent Samples T Test' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-2',
        type: 'output',
        position: { x: 1200, y: 450 },
        data: { label: 'Mann-Whitney U Test' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-3',
        type: 'output',
        position: { x: 1000, y: 450 },
        data: { label: 'One-Way ANOVA' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-4',
        type: 'output',
        position: { x: 800, y: 450 },
        data: { label: 'Kruskal-Wallis' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-5',
        type: 'output',
        position: { x: 600, y: 450 },
        data: { label: 'Paired Samples T Test' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-6',
        type: 'output',
        position: { x: 400, y: 450 },
        data: { label: 'Wilcoxon Test' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-7',
        type: 'output',
        position: { x: 200, y: 450 },
        data: { label: 'Repeated Measures ANOVA' },
        style: { backgroundColor: pinkColor },
    },
    {
        id: 'l4-8',
        type: 'output',
        position: { x: 0, y: 450 },
        data: { label: 'Freidman Test' },
        style: { backgroundColor: pinkColor },
    }
];