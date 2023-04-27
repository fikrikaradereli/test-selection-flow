export default [
    // RIGHT BRANCH
    {
        id: '1',
        source: 'l1',
        target: 'l2-1',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: '2',
        source: 'l2-1',
        target: 'l3-1',
        type: 'smoothstep',
        animated: true,
    },
    {
        id: '3',
        source: 'l3-1',
        target: 'l4-1',
        type: 'smoothstep',
        label: 'parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(250, 176, 5)' },
        labelBgStyle: { fill: 'rgb(255, 249, 219)' },
        animated: true,
    },

    {
        id: '4',
        source: 'l3-1',
        target: 'l4-2',
        type: 'smoothstep',
        label: 'non-parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(21, 170, 191)' },
        labelBgStyle: { fill: 'rgb(227, 250, 252)' }
    },

    {
        id: '5',
        source: 'l2-1',
        target: 'l3-2',
        type: 'smoothstep'
    },
    {
        id: '6',
        source: 'l3-2',
        target: 'l4-3',
        type: 'smoothstep',
        label: 'parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(250, 176, 5)' },
        labelBgStyle: { fill: 'rgb(255, 249, 219)' }
    },
    {
        id: '7',
        source: 'l3-2',
        target: 'l4-4',
        type: 'smoothstep',
        label: 'non-parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(21, 170, 191)' },
        labelBgStyle: { fill: 'rgb(227, 250, 252)' }
    },

    // LEFT BRANCH
    {
        id: '8',
        source: 'l1',
        target: 'l2-2',
        type: 'smoothstep'
    },
    {
        id: '9',
        source: 'l2-2',
        target: 'l3-3',
        type: 'smoothstep'
    },
    {
        id: '10',
        source: 'l3-3',
        target: 'l4-5',
        type: 'smoothstep',
        label: 'parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(250, 176, 5)' },
        labelBgStyle: { fill: 'rgb(255, 249, 219)' }
    },

    {
        id: '11',
        source: 'l3-3',
        target: 'l4-6',
        type: 'smoothstep',
        label: 'non-parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(21, 170, 191)' },
        labelBgStyle: { fill: 'rgb(227, 250, 252)' }
    },

    {
        id: '12',
        source: 'l2-2',
        target: 'l3-4',
        type: 'smoothstep'
    },
    {
        id: '13',
        source: 'l3-4',
        target: 'l4-7',
        type: 'smoothstep',
        label: 'parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(250, 176, 5)' },
        labelBgStyle: { fill: 'rgb(255, 249, 219)' }
    },
    {
        id: '14',
        source: 'l3-4',
        target: 'l4-8',
        type: 'smoothstep',
        label: 'non-parametric',
        labelBgPadding: [8, 4],
        labelBgBorderRadius: 4,
        labelStyle: { fill: 'rgb(21, 170, 191)' },
        labelBgStyle: { fill: 'rgb(227, 250, 252)' }
    },
];