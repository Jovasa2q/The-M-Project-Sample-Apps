// ==========================================================================
// The M-Project - Mobile HTML5 Application Framework
// Generated with: Espresso 0.0.6
//
// Project: ChartingSample 
// ==========================================================================

var ChartingSample  = ChartingSample || {};

ChartingSample.app = M.Application.design({

    entryPage: 'page1',

    page1: M.PageView.design({

        childViews: 'header content',

        onLoad: {
            target: ChartingSample.ChartingController,
            action: 'init'
        },

        onOrientationChange: {
            target: ChartingSample.ChartingController,
            action: 'resize'
        },

        header: M.ToolbarView.design({
    
            anchorLocation: M.TOP,

            value: 'Raphaël Demo'

        }),

        content: M.ScrollView.design({

            childViews: 'canvas',

            canvas: M.ContainerView.design({

                

            })

        })

    })

});