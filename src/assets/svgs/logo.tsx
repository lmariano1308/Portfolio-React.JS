import * as React from 'react';

interface Props {
    size: number;
}

const Logo: React.FC<Props> = ({ size }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 992 355"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line
            x1={533.881}
            y1={49}
            x2={533.881}
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={534.385}
            y2={-1.5}
            transform="matrix(-0.999998 0.00187131 -0.00186004 -0.999998 535.381 0)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={534.385}
            y2={-1.5}
            transform="matrix(-0.999998 0.00187131 -0.00186004 -0.999998 581.242 48)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            x1={582.239}
            y1={353.5}
            x2={47.8553}
            y2={353.5}
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={303.002}
            y2={-1.5}
            transform="matrix(0.00317018 0.999995 -0.999995 0.0032613 0 1)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={62}
            y2={-1.5}
            transform="matrix(0.00320572 0.999995 -0.999995 0.00322514 580.245 48)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={62}
            y2={-1.5}
            transform="matrix(0.00320572 0.999995 -0.999995 0.00322514 580.245 293)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            y1={-1.5}
            x2={303.002}
            y2={-1.5}
            transform="matrix(0.00320572 0.999995 -0.999995 0.00322514 46.8583 49)"
            stroke="#FFD700"
            strokeWidth={3}
        />
        <line
            x1={0.996979}
            y1={302.5}
            x2={47.8553}
            y2={302.5}
            stroke="#FFD700"
            strokeWidth={3}
        />
        <path
            d="M98.1168 111.784L110.917 111.016C111.087 111.187 111.173 111.955 111.173 113.32C111.173 114.6 110.959 115.453 110.533 115.88C107.461 115.88 105.285 116.435 104.005 117.544C102.725 118.568 102.085 120.232 102.085 122.536L104.133 184.232C104.303 187.816 104.943 190.333 106.053 191.784C107.248 193.149 109.424 193.832 112.581 193.832H123.077C127.088 193.832 130.416 192.509 133.061 189.864C135.792 187.219 138.437 182.995 140.997 177.192C141.168 177.021 141.808 176.936 142.917 176.936C144.111 176.936 145.093 177.32 145.861 178.088L139.205 202.28C128.538 201.171 118.298 200.616 108.485 200.616C98.7568 200.616 90.4368 200.744 83.5248 201C83.2688 200.744 83.1408 200.019 83.1408 198.824C83.1408 197.544 83.3968 196.648 83.9088 196.136C89.6262 196.136 92.4848 193.917 92.4848 189.48L93.2528 122.536C93.2528 120.232 92.5702 118.568 91.2048 117.544C89.9248 116.435 87.7488 115.88 84.6768 115.88C84.0795 115.453 83.7808 114.6 83.7808 113.32C83.7808 111.955 83.8662 111.187 84.0368 111.016L98.1168 111.784ZM199.501 191.144C192.077 198.568 185.25 202.28 179.021 202.28C172.791 202.28 167.842 200.445 164.173 196.776C160.589 193.021 158.839 188.2 158.925 182.312L159.053 155.304C159.053 152.829 158.327 151.123 156.877 150.184C155.426 149.245 152.951 148.776 149.453 148.776C149.197 148.52 149.069 147.88 149.069 146.856C149.069 145.832 149.325 144.936 149.837 144.168C152.909 143.827 155.298 143.4 157.005 142.888C158.797 142.291 160.759 141.181 162.893 139.56C163.234 139.304 164.087 139.176 165.453 139.176C166.818 139.176 167.629 139.304 167.885 139.56L168.781 180.008C168.866 184.36 170.061 187.859 172.365 190.504C174.754 193.064 178.039 194.344 182.221 194.344C185.293 194.344 188.493 193.064 191.821 190.504C192.93 189.651 194.253 188.499 195.789 187.048C197.41 185.597 198.391 184.744 198.733 184.488V155.304C198.733 152.915 197.965 151.251 196.429 150.312C194.978 149.288 192.546 148.776 189.133 148.776C188.877 148.52 188.749 147.837 188.749 146.728C188.749 145.533 189.005 144.68 189.517 144.168C192.589 143.827 194.978 143.4 196.685 142.888C198.477 142.291 200.44 141.181 202.573 139.56C202.914 139.304 203.768 139.176 205.133 139.176C206.498 139.176 207.309 139.304 207.565 139.56L208.845 186.536C209.016 192.339 211.021 195.24 214.861 195.24C216.226 195.24 217.848 194.856 219.725 194.088C220.322 194.856 220.621 196.008 220.621 197.544C220.621 198.483 219.554 199.507 217.421 200.616C215.288 201.725 213.026 202.28 210.637 202.28C208.333 202.28 206.498 201.896 205.133 201.128C203.853 200.36 202.872 199.421 202.189 198.312C200.824 196.093 199.928 193.704 199.501 191.144ZM274.501 193.448C269.04 199.336 262 202.28 253.381 202.28C244.847 202.28 238.362 199.336 233.925 193.448C229.573 187.56 227.397 179.965 227.397 170.664C227.397 161.363 229.914 153.64 234.949 147.496C239.983 141.352 246.895 138.28 255.685 138.28C261.231 138.28 265.754 139.688 269.253 142.504C272.752 145.32 274.501 148.819 274.501 153C274.501 154.963 273.946 156.499 272.837 157.608C271.727 158.717 270.191 159.272 268.229 159.272C266.352 159.272 264.816 158.888 263.621 158.12C262.512 157.267 261.957 156.2 261.957 154.92C261.957 153.555 262.469 152.317 263.493 151.208C264.517 150.013 265.029 149.16 265.029 148.648C265.029 147.539 263.962 146.557 261.829 145.704C259.696 144.851 257.605 144.424 255.557 144.424C250.522 144.424 246.426 146.472 243.269 150.568C240.111 154.664 238.533 160.296 238.533 167.464C238.533 185.299 243.994 194.216 254.917 194.216C258.074 194.216 261.359 193.704 264.773 192.68C268.186 191.571 270.96 190.163 273.093 188.456C273.434 188.712 273.861 189.309 274.373 190.248C274.885 191.187 275.141 191.869 275.141 192.296C275.141 192.637 274.928 193.021 274.501 193.448ZM301.275 202.28C296.581 202.28 292.613 200.787 289.371 197.8C286.128 194.728 284.507 190.845 284.507 186.152C284.507 181.459 286.469 177.576 290.395 174.504C294.405 171.347 301.019 168.829 310.235 166.952L319.067 165.16V161.96C319.067 155.987 318.043 151.677 315.995 149.032C314.032 146.301 310.704 144.936 306.011 144.936C299.525 144.936 296.283 146.259 296.283 148.904C296.283 149.416 296.795 150.269 297.819 151.464C298.843 152.573 299.355 153.811 299.355 155.176C299.355 156.456 298.757 157.523 297.563 158.376C296.453 159.144 294.96 159.528 293.083 159.528C291.205 159.528 289.669 158.973 288.475 157.864C287.365 156.755 286.811 155.219 286.811 153.256C286.811 148.904 288.901 145.32 293.083 142.504C297.349 139.688 301.957 138.28 306.907 138.28C314.928 138.28 320.646 139.987 324.059 143.4C327.472 146.728 329.179 151.208 329.179 156.84C329.179 157.011 329.008 167.123 328.667 187.176C328.581 192.637 330.416 195.368 334.171 195.368C335.707 195.368 337.456 194.941 339.419 194.088C340.016 195.112 340.315 196.093 340.315 197.032C340.315 197.885 340.23 198.397 340.059 198.568C339.206 199.421 337.712 200.232 335.579 201C333.446 201.853 331.184 202.28 328.795 202.28C325.125 202.28 322.053 199.976 319.579 195.368C314.203 199.976 308.101 202.28 301.275 202.28ZM312.539 173.48C305.968 175.101 301.573 176.765 299.355 178.472C297.221 180.093 296.155 182.355 296.155 185.256C296.155 188.072 296.923 190.376 298.459 192.168C299.995 193.96 301.872 194.856 304.091 194.856C306.309 194.856 308.869 194.387 311.771 193.448C314.757 192.424 317.317 191.272 319.451 189.992L319.195 171.816L312.539 173.48ZM371.223 138.28C375.831 138.28 379.799 139.389 383.127 141.608C386.455 143.741 388.119 146.429 388.119 149.672C388.119 151.635 387.522 153.213 386.327 154.408C385.218 155.603 383.767 156.2 381.975 156.2C380.268 156.2 378.817 155.816 377.623 155.048C376.513 154.28 375.959 153.299 375.959 152.104C375.959 150.824 376.129 149.8 376.471 149.032C376.812 148.264 376.983 147.624 376.983 147.112C376.983 145.235 375.02 144.296 371.095 144.296C367.169 144.296 364.055 145.149 361.751 146.856C359.532 148.563 358.423 150.611 358.423 153C358.423 155.389 359.532 157.565 361.751 159.528C363.969 161.491 366.657 163.283 369.815 164.904C372.972 166.525 376.13 168.232 379.287 170.024C382.444 171.731 385.132 173.907 387.351 176.552C389.569 179.197 390.679 182.141 390.679 185.384C390.679 190.845 388.375 195.027 383.767 197.928C379.244 200.829 373.954 202.28 367.895 202.28C361.836 202.28 356.716 200.872 352.535 198.056C348.439 195.24 346.391 191.101 346.391 185.64C346.391 183.763 346.945 182.269 348.055 181.16C349.164 179.965 350.7 179.368 352.663 179.368C356.844 179.368 358.935 180.819 358.935 183.72C358.935 185.085 358.423 186.365 357.399 187.56C356.375 188.755 355.863 189.565 355.863 189.992C355.863 191.528 357.057 192.851 359.447 193.96C361.921 195.069 364.609 195.624 367.511 195.624C370.412 195.624 373.313 194.899 376.215 193.448C379.116 191.912 380.567 189.523 380.567 186.28C380.567 182.952 376.812 179.581 369.303 176.168C366.146 174.803 362.988 173.352 359.831 171.816C356.673 170.195 353.985 168.061 351.767 165.416C349.633 162.685 348.567 159.613 348.567 156.2C348.567 150.568 350.615 146.173 354.711 143.016C358.892 139.859 364.396 138.28 371.223 138.28ZM519.714 200.232L504.482 201C504.226 200.744 504.098 200.019 504.098 198.824C504.098 197.544 504.354 196.648 504.866 196.136C507.426 196.136 509.516 195.667 511.138 194.728C512.759 193.789 513.527 192.04 513.442 189.48L510.754 133.16L483.49 201C483.148 201.341 482.21 201.512 480.674 201.512C479.138 201.512 478.242 201.341 477.986 201L451.234 133.16C448.93 171.048 447.778 190.077 447.778 190.248C447.778 194.173 450.636 196.136 456.354 196.136C456.951 196.904 457.25 197.885 457.25 199.08C457.25 200.189 457.164 200.829 456.994 201L442.402 200.232L429.602 201C429.346 200.744 429.218 200.019 429.218 198.824C429.218 197.544 429.474 196.648 429.986 196.136C432.972 196.136 435.063 195.624 436.258 194.6C437.538 193.576 438.263 191.869 438.434 189.48L444.066 122.536C444.066 119.635 443.639 117.843 442.786 117.16C441.932 116.392 439.799 115.965 436.386 115.88C435.874 115.453 435.618 114.6 435.618 113.32C435.618 111.955 435.703 111.187 435.874 111.016C439.458 111.528 442.487 111.784 444.962 111.784C447.436 111.784 450.722 111.528 454.818 111.016L481.826 184.616L510.626 111.016C514.722 111.528 517.709 111.784 519.586 111.784C521.549 111.784 524.322 111.528 527.906 111.016C528.162 111.272 528.29 112.04 528.29 113.32C528.29 114.6 528.076 115.453 527.65 115.88C524.407 115.88 522.189 116.392 520.994 117.416C519.799 118.44 519.202 119.891 519.202 121.768C519.202 122.024 521.165 144.595 525.09 189.48C525.261 191.869 525.943 193.576 527.138 194.6C528.418 195.624 530.551 196.136 533.538 196.136C533.965 196.563 534.178 197.459 534.178 198.824C534.178 200.104 534.093 200.829 533.922 201L519.714 200.232ZM559.275 202.28C554.581 202.28 550.613 200.787 547.371 197.8C544.128 194.728 542.507 190.845 542.507 186.152C542.507 181.459 544.469 177.576 548.395 174.504C552.405 171.347 559.019 168.829 568.235 166.952L577.067 165.16V161.96C577.067 155.987 576.043 151.677 573.995 149.032C572.032 146.301 568.704 144.936 564.011 144.936C557.525 144.936 554.283 146.259 554.283 148.904C554.283 149.416 554.795 150.269 555.819 151.464C556.843 152.573 557.355 153.811 557.355 155.176C557.355 156.456 556.757 157.523 555.563 158.376C554.453 159.144 552.96 159.528 551.083 159.528C549.205 159.528 547.669 158.973 546.475 157.864C545.365 156.755 544.811 155.219 544.811 153.256C544.811 148.904 546.901 145.32 551.083 142.504C555.349 139.688 559.957 138.28 564.907 138.28C572.928 138.28 578.646 139.987 582.059 143.4C585.472 146.728 587.179 151.208 587.179 156.84C587.179 157.011 587.008 167.123 586.667 187.176C586.581 192.637 588.416 195.368 592.171 195.368C593.707 195.368 595.456 194.941 597.419 194.088C598.016 195.112 598.315 196.093 598.315 197.032C598.315 197.885 598.23 198.397 598.059 198.568C597.206 199.421 595.712 200.232 593.579 201C591.446 201.853 589.184 202.28 586.795 202.28C583.125 202.28 580.053 199.976 577.579 195.368C572.203 199.976 566.101 202.28 559.275 202.28ZM570.539 173.48C563.968 175.101 559.573 176.765 557.355 178.472C555.221 180.093 554.155 182.355 554.155 185.256C554.155 188.072 554.923 190.376 556.459 192.168C557.995 193.96 559.872 194.856 562.091 194.856C564.309 194.856 566.869 194.387 569.771 193.448C572.757 192.424 575.317 191.272 577.451 189.992L577.195 171.816L570.539 173.48ZM619.495 200.232L603.239 201C602.983 200.744 602.855 200.061 602.855 198.952C602.855 197.757 603.111 196.904 603.623 196.392C607.036 196.392 609.511 195.923 611.047 194.984C612.668 193.96 613.479 192.253 613.479 189.864L613.863 154.024C613.863 151.635 613.052 149.971 611.431 149.032C609.895 148.008 607.377 147.496 603.879 147.496C603.623 147.24 603.495 146.557 603.495 145.448C603.495 144.253 603.751 143.4 604.263 142.888C604.604 142.888 605.415 142.803 606.695 142.632C607.975 142.461 608.785 142.376 609.127 142.376C609.468 142.291 610.108 142.163 611.047 141.992C612.071 141.736 612.839 141.437 613.351 141.096C615.057 140.157 616.209 139.389 616.807 138.792C617.489 138.109 618.385 137.768 619.495 137.768C620.604 137.768 621.415 137.939 621.927 138.28L623.207 151.592C624.743 148.179 627.218 145.107 630.631 142.376C634.13 139.645 637.842 138.28 641.767 138.28C644.071 138.28 645.991 139.048 647.527 140.584C649.148 142.035 649.959 143.827 649.959 145.96C649.959 148.008 649.362 149.672 648.167 150.952C646.972 152.147 645.436 152.744 643.559 152.744C639.463 152.744 637.415 151.293 637.415 148.392C637.415 147.624 637.628 146.941 638.055 146.344C638.481 145.747 638.695 145.32 638.695 145.064C638.695 144.808 638.396 144.68 637.799 144.68C635.666 144.68 632.764 147.069 629.095 151.848C625.511 156.627 623.761 160.979 623.847 164.904L624.743 189.864C624.828 192.253 625.596 193.96 627.047 194.984C628.583 195.923 631.058 196.392 634.471 196.392C634.897 196.819 635.111 197.672 635.111 198.952C635.111 200.147 635.025 200.829 634.855 201L619.495 200.232ZM678.267 122.664C678.267 124.797 677.584 126.504 676.219 127.784C674.853 128.979 673.061 129.576 670.843 129.576C668.709 129.576 667.003 128.893 665.723 127.528C664.443 126.163 663.803 124.456 663.803 122.408C663.803 120.275 664.443 118.525 665.723 117.16C667.003 115.709 668.667 114.984 670.715 114.984C672.763 114.984 674.512 115.709 675.963 117.16C677.499 118.611 678.267 120.445 678.267 122.664ZM672.507 200.232L656.251 201C655.995 200.744 655.867 200.061 655.867 198.952C655.867 197.757 656.123 196.904 656.635 196.392C660.048 196.392 662.523 195.923 664.059 194.984C665.68 193.96 666.491 192.253 666.491 189.864L666.619 155.176C666.619 150.824 663.077 148.648 655.995 148.648C655.739 148.392 655.611 147.709 655.611 146.6C655.611 145.405 655.867 144.552 656.379 144.04C659.024 144.04 661.541 143.741 663.931 143.144C666.32 142.461 667.899 141.907 668.667 141.48C669.52 140.968 670.203 140.456 670.715 139.944C671.312 139.347 672.165 139.048 673.275 139.048C674.384 139.048 675.195 139.219 675.707 139.56L677.755 189.864C677.84 192.253 678.608 193.96 680.059 194.984C681.595 195.923 684.069 196.392 687.483 196.392C687.91 196.819 688.123 197.672 688.123 198.952C688.123 200.147 688.037 200.829 687.867 201L672.507 200.232ZM711.775 202.28C707.081 202.28 703.113 200.787 699.871 197.8C696.628 194.728 695.007 190.845 695.007 186.152C695.007 181.459 696.969 177.576 700.895 174.504C704.905 171.347 711.519 168.829 720.735 166.952L729.567 165.16V161.96C729.567 155.987 728.543 151.677 726.495 149.032C724.532 146.301 721.204 144.936 716.511 144.936C710.025 144.936 706.783 146.259 706.783 148.904C706.783 149.416 707.295 150.269 708.319 151.464C709.343 152.573 709.855 153.811 709.855 155.176C709.855 156.456 709.257 157.523 708.063 158.376C706.953 159.144 705.46 159.528 703.583 159.528C701.705 159.528 700.169 158.973 698.975 157.864C697.865 156.755 697.311 155.219 697.311 153.256C697.311 148.904 699.401 145.32 703.583 142.504C707.849 139.688 712.457 138.28 717.407 138.28C725.428 138.28 731.146 139.987 734.559 143.4C737.972 146.728 739.679 151.208 739.679 156.84C739.679 157.011 739.508 167.123 739.167 187.176C739.081 192.637 740.916 195.368 744.671 195.368C746.207 195.368 747.956 194.941 749.919 194.088C750.516 195.112 750.815 196.093 750.815 197.032C750.815 197.885 750.73 198.397 750.559 198.568C749.706 199.421 748.212 200.232 746.079 201C743.946 201.853 741.684 202.28 739.295 202.28C735.625 202.28 732.553 199.976 730.079 195.368C724.703 199.976 718.601 202.28 711.775 202.28ZM723.039 173.48C716.468 175.101 712.073 176.765 709.855 178.472C707.721 180.093 706.655 182.355 706.655 185.256C706.655 188.072 707.423 190.376 708.959 192.168C710.495 193.96 712.372 194.856 714.591 194.856C716.809 194.856 719.369 194.387 722.271 193.448C725.257 192.424 727.817 191.272 729.951 189.992L729.695 171.816L723.039 173.48ZM775.451 149.416C782.875 141.992 789.659 138.28 795.803 138.28C802.032 138.28 806.896 140.115 810.395 143.784C813.979 147.453 815.856 152.275 816.027 158.248L816.923 189.864C817.008 192.253 817.776 193.96 819.227 194.984C820.678 195.923 823.109 196.392 826.523 196.392C826.95 196.819 827.163 197.672 827.163 198.952C827.163 200.147 827.078 200.829 826.907 201L811.675 200.232L796.059 201C795.803 200.744 795.675 200.061 795.675 198.952C795.675 197.757 795.931 196.904 796.443 196.392C799.686 196.392 801.99 195.923 803.355 194.984C804.806 193.96 805.574 192.253 805.659 189.864L806.171 160.552C806.256 156.285 805.104 152.829 802.715 150.184C800.325 147.539 796.998 146.216 792.731 146.216C789.659 146.216 786.459 147.496 783.131 150.056C782.021 150.909 780.656 152.061 779.035 153.512C777.499 154.963 776.56 155.816 776.219 156.072L777.243 189.864C777.328 192.253 778.053 193.96 779.419 194.984C780.784 195.923 783.088 196.392 786.331 196.392C786.757 196.819 786.971 197.672 786.971 198.952C786.971 200.147 786.885 200.829 786.715 201L771.995 200.232L755.739 201C755.483 200.744 755.355 200.061 755.355 198.952C755.355 197.757 755.611 196.904 756.123 196.392C759.536 196.392 762.011 195.923 763.547 194.984C765.168 193.96 765.979 192.253 765.979 189.864L766.363 154.024C766.363 151.635 765.552 149.971 763.931 149.032C762.395 148.008 759.877 147.496 756.379 147.496C756.123 147.24 755.995 146.557 755.995 145.448C755.995 144.253 756.251 143.4 756.763 142.888C757.104 142.888 757.915 142.803 759.195 142.632C760.475 142.461 761.285 142.376 761.627 142.376C761.968 142.291 762.608 142.163 763.547 141.992C764.571 141.736 765.339 141.437 765.851 141.096C767.557 140.157 768.709 139.389 769.307 138.792C769.989 138.109 770.885 137.768 771.995 137.768C773.104 137.768 773.915 137.939 774.427 138.28L775.451 149.416ZM840.806 193.32C836.368 187.261 834.15 179.581 834.15 170.28C834.15 160.979 836.368 153.341 840.806 147.368C845.328 141.309 852.112 138.28 861.158 138.28C870.203 138.28 877.073 141.309 881.766 147.368C886.545 153.427 888.934 161.064 888.934 170.28C888.934 179.496 886.545 187.133 881.766 193.192C877.073 199.251 870.203 202.28 861.158 202.28C852.112 202.28 845.328 199.293 840.806 193.32ZM875.238 188.456C877.115 184.531 878.054 178.856 878.054 171.432C878.054 164.008 876.56 157.651 873.574 152.36C870.672 147.069 866.448 144.424 860.902 144.424C853.392 144.424 848.614 147.795 846.566 154.536C845.542 158.12 845.03 162.6 845.03 167.976C845.03 176.083 846.48 182.696 849.382 187.816C852.368 192.851 856.891 195.368 862.95 195.368C869.009 195.368 873.105 193.064 875.238 188.456Z"
            fill="#FFD700"
        />
        <path
            d="M81.2876 262V232.909H91.1171C93.3898 232.909 95.2554 233.297 96.7137 234.074C98.172 234.841 99.2516 235.897 99.9523 237.241C100.653 238.586 101.003 240.116 101.003 241.83C101.003 243.544 100.653 245.063 99.9523 246.389C99.2516 247.715 98.1768 248.757 96.7279 249.514C95.279 250.262 93.4277 250.636 91.1739 250.636H83.2194V247.455H91.0603C92.6133 247.455 93.8633 247.227 94.8103 246.773C95.7667 246.318 96.458 245.674 96.8842 244.841C97.3198 243.998 97.5376 242.994 97.5376 241.83C97.5376 240.665 97.3198 239.647 96.8842 238.776C96.4485 237.904 95.7525 237.232 94.7961 236.759C93.8396 236.276 92.5754 236.034 91.0035 236.034H84.8103V262H81.2876ZM94.9807 248.932L102.14 262H98.0489L91.0035 248.932H94.9807ZM106.873 262V232.909H124.43V236.034H110.396V245.864H123.521V248.989H110.396V258.875H124.658V262H106.873ZM131.973 262H128.28L138.962 232.909H142.598L153.28 262H149.587L140.893 237.511H140.666L131.973 262ZM133.337 250.636H148.223V253.761H133.337V250.636ZM179.853 242H176.33C176.122 240.987 175.757 240.097 175.236 239.33C174.725 238.562 174.1 237.919 173.361 237.398C172.632 236.867 171.823 236.47 170.932 236.205C170.042 235.939 169.114 235.807 168.148 235.807C166.387 235.807 164.791 236.252 163.361 237.142C161.941 238.032 160.809 239.344 159.967 241.077C159.133 242.81 158.717 244.936 158.717 247.455C158.717 249.973 159.133 252.099 159.967 253.832C160.809 255.565 161.941 256.877 163.361 257.767C164.791 258.657 166.387 259.102 168.148 259.102C169.114 259.102 170.042 258.97 170.932 258.705C171.823 258.439 172.632 258.046 173.361 257.526C174.1 256.995 174.725 256.347 175.236 255.58C175.757 254.803 176.122 253.913 176.33 252.909H179.853C179.588 254.396 179.105 255.726 178.404 256.901C177.703 258.075 176.832 259.074 175.79 259.898C174.749 260.712 173.579 261.332 172.282 261.759C170.994 262.185 169.616 262.398 168.148 262.398C165.667 262.398 163.461 261.792 161.529 260.58C159.597 259.367 158.077 257.644 156.969 255.409C155.861 253.174 155.307 250.523 155.307 247.455C155.307 244.386 155.861 241.735 156.969 239.5C158.077 237.265 159.597 235.542 161.529 234.33C163.461 233.117 165.667 232.511 168.148 232.511C169.616 232.511 170.994 232.724 172.282 233.151C173.579 233.577 174.749 234.202 175.79 235.026C176.832 235.84 177.703 236.834 178.404 238.009C179.105 239.173 179.588 240.504 179.853 242ZM183.954 236.034V232.909H205.773V236.034H196.625V262H193.102V236.034H183.954ZM211.831 262.227C211.13 262.227 210.529 261.976 210.027 261.474C209.525 260.973 209.274 260.371 209.274 259.67C209.274 258.97 209.525 258.368 210.027 257.866C210.529 257.365 211.13 257.114 211.831 257.114C212.532 257.114 213.133 257.365 213.635 257.866C214.137 258.368 214.388 258.97 214.388 259.67C214.388 260.134 214.269 260.561 214.033 260.949C213.805 261.337 213.498 261.65 213.109 261.886C212.731 262.114 212.304 262.227 211.831 262.227ZM231.994 232.909H235.517V253.705C235.517 255.561 235.176 257.137 234.494 258.435C233.812 259.732 232.851 260.717 231.611 261.389C230.37 262.062 228.907 262.398 227.222 262.398C225.631 262.398 224.215 262.109 222.974 261.531C221.734 260.944 220.758 260.111 220.048 259.031C219.338 257.952 218.983 256.669 218.983 255.182H222.449C222.449 256.006 222.652 256.725 223.06 257.341C223.476 257.947 224.044 258.42 224.764 258.761C225.484 259.102 226.303 259.273 227.222 259.273C228.235 259.273 229.097 259.06 229.807 258.634C230.517 258.207 231.057 257.582 231.426 256.759C231.805 255.925 231.994 254.907 231.994 253.705V232.909ZM258.486 240.182C258.315 238.742 257.624 237.625 256.412 236.83C255.2 236.034 253.713 235.636 251.952 235.636C250.664 235.636 249.537 235.845 248.571 236.261C247.615 236.678 246.866 237.251 246.327 237.98C245.796 238.709 245.531 239.538 245.531 240.466C245.531 241.242 245.716 241.91 246.085 242.469C246.464 243.018 246.947 243.477 247.534 243.847C248.121 244.206 248.737 244.505 249.381 244.741C250.025 244.969 250.616 245.153 251.156 245.295L254.111 246.091C254.868 246.29 255.711 246.564 256.639 246.915C257.577 247.265 258.472 247.743 259.324 248.349C260.186 248.946 260.896 249.713 261.454 250.651C262.013 251.588 262.293 252.739 262.293 254.102C262.293 255.674 261.881 257.095 261.057 258.364C260.242 259.633 259.049 260.641 257.477 261.389C255.915 262.137 254.016 262.511 251.781 262.511C249.698 262.511 247.894 262.175 246.369 261.503C244.854 260.83 243.661 259.893 242.79 258.69C241.928 257.488 241.44 256.091 241.327 254.5H244.963C245.058 255.598 245.427 256.508 246.071 257.227C246.724 257.937 247.548 258.468 248.543 258.818C249.546 259.159 250.626 259.33 251.781 259.33C253.126 259.33 254.333 259.112 255.403 258.676C256.473 258.231 257.321 257.616 257.946 256.83C258.571 256.034 258.883 255.106 258.883 254.045C258.883 253.08 258.614 252.294 258.074 251.688C257.534 251.081 256.824 250.589 255.943 250.21C255.062 249.831 254.111 249.5 253.088 249.216L249.508 248.193C247.236 247.54 245.436 246.607 244.111 245.395C242.785 244.183 242.122 242.597 242.122 240.636C242.122 239.008 242.562 237.587 243.443 236.375C244.333 235.153 245.526 234.206 247.023 233.534C248.528 232.852 250.209 232.511 252.065 232.511C253.94 232.511 255.607 232.848 257.065 233.52C258.524 234.183 259.679 235.092 260.531 236.247C261.393 237.402 261.847 238.714 261.895 240.182H258.486ZM283.766 223.534V271.375H280.925V223.534H283.766ZM303.67 262V232.909H313.5C315.773 232.909 317.638 233.297 319.097 234.074C320.555 234.841 321.634 235.897 322.335 237.241C323.036 238.586 323.386 240.116 323.386 241.83C323.386 243.544 323.036 245.063 322.335 246.389C321.634 247.715 320.56 248.757 319.111 249.514C317.662 250.262 315.811 250.636 313.557 250.636H305.602V247.455H313.443C314.996 247.455 316.246 247.227 317.193 246.773C318.15 246.318 318.841 245.674 319.267 244.841C319.703 243.998 319.92 242.994 319.92 241.83C319.92 240.665 319.703 239.647 319.267 238.776C318.831 237.904 318.135 237.232 317.179 236.759C316.222 236.276 314.958 236.034 313.386 236.034H307.193V262H303.67ZM317.364 248.932L324.523 262H320.432L313.386 248.932H317.364ZM329.256 262V232.909H346.813V236.034H332.779V245.864H345.904V248.989H332.779V258.875H347.04V262H329.256ZM354.356 262H350.663L361.344 232.909H364.981L375.663 262H371.969L363.276 237.511H363.049L354.356 262ZM355.719 250.636H370.606V253.761H355.719V250.636ZM402.236 242H398.713C398.505 240.987 398.14 240.097 397.619 239.33C397.108 238.562 396.483 237.919 395.744 237.398C395.015 236.867 394.205 236.47 393.315 236.205C392.425 235.939 391.497 235.807 390.531 235.807C388.77 235.807 387.174 236.252 385.744 237.142C384.324 238.032 383.192 239.344 382.349 241.077C381.516 242.81 381.099 244.936 381.099 247.455C381.099 249.973 381.516 252.099 382.349 253.832C383.192 255.565 384.324 256.877 385.744 257.767C387.174 258.657 388.77 259.102 390.531 259.102C391.497 259.102 392.425 258.97 393.315 258.705C394.205 258.439 395.015 258.046 395.744 257.526C396.483 256.995 397.108 256.347 397.619 255.58C398.14 254.803 398.505 253.913 398.713 252.909H402.236C401.971 254.396 401.488 255.726 400.787 256.901C400.086 258.075 399.215 259.074 398.173 259.898C397.132 260.712 395.962 261.332 394.665 261.759C393.377 262.185 391.999 262.398 390.531 262.398C388.05 262.398 385.844 261.792 383.912 260.58C381.98 259.367 380.46 257.644 379.352 255.409C378.244 253.174 377.69 250.523 377.69 247.455C377.69 244.386 378.244 241.735 379.352 239.5C380.46 237.265 381.98 235.542 383.912 234.33C385.844 233.117 388.05 232.511 390.531 232.511C391.999 232.511 393.377 232.724 394.665 233.151C395.962 233.577 397.132 234.202 398.173 235.026C399.215 235.84 400.086 236.834 400.787 238.009C401.488 239.173 401.971 240.504 402.236 242ZM406.337 236.034V232.909H428.155V236.034H419.008V262H415.485V236.034H406.337ZM467.91 232.909V262H464.501L448.649 239.159H448.365V262H444.842V232.909H448.251L464.16 255.807H464.445V232.909H467.91ZM476.153 262H472.459L483.141 232.909H486.778L497.459 262H493.766L485.073 237.511H484.846L476.153 262ZM477.516 250.636H492.403V253.761H477.516V250.636ZM497.001 236.034V232.909H518.82V236.034H509.672V262H506.149V236.034H497.001ZM527.779 232.909V262H524.256V232.909H527.779ZM536.035 232.909L544.672 257.398H545.013L553.649 232.909H557.342L546.66 262H543.024L532.342 232.909H536.035ZM561.873 262V232.909H579.43V236.034H565.396V245.864H578.521V248.989H565.396V258.875H579.658V262H561.873ZM606.007 262H597.03V232.909H606.405C609.227 232.909 611.641 233.491 613.649 234.656C615.657 235.812 617.195 237.473 618.266 239.642C619.336 241.801 619.871 244.386 619.871 247.398C619.871 250.428 619.331 253.037 618.251 255.224C617.172 257.402 615.6 259.079 613.535 260.253C611.471 261.418 608.962 262 606.007 262ZM600.552 258.875H605.78C608.185 258.875 610.178 258.411 611.76 257.483C613.341 256.555 614.52 255.234 615.297 253.52C616.073 251.806 616.462 249.765 616.462 247.398C616.462 245.049 616.078 243.027 615.311 241.332C614.544 239.628 613.398 238.321 611.873 237.412C610.349 236.493 608.45 236.034 606.177 236.034H600.552V258.875ZM625.78 262V232.909H643.337V236.034H629.302V245.864H642.427V248.989H629.302V258.875H643.564V262H625.78ZM650.879 232.909L659.516 257.398H659.856L668.493 232.909H672.186L661.504 262H657.868L647.186 232.909H650.879ZM676.717 262V232.909H694.274V236.034H680.24V245.864H693.365V248.989H680.24V258.875H694.501V262H676.717ZM700.623 262V232.909H704.146V258.875H717.669V262H700.623ZM746.536 247.455C746.536 250.523 745.982 253.174 744.874 255.409C743.766 257.644 742.246 259.367 740.315 260.58C738.383 261.792 736.176 262.398 733.695 262.398C731.214 262.398 729.008 261.792 727.076 260.58C725.144 259.367 723.624 257.644 722.516 255.409C721.408 253.174 720.854 250.523 720.854 247.455C720.854 244.386 721.408 241.735 722.516 239.5C723.624 237.265 725.144 235.542 727.076 234.33C729.008 233.117 731.214 232.511 733.695 232.511C736.176 232.511 738.383 233.117 740.315 234.33C742.246 235.542 743.766 237.265 744.874 239.5C745.982 241.735 746.536 244.386 746.536 247.455ZM743.127 247.455C743.127 244.936 742.706 242.81 741.863 241.077C741.03 239.344 739.898 238.032 738.468 237.142C737.048 236.252 735.457 235.807 733.695 235.807C731.934 235.807 730.338 236.252 728.908 237.142C727.488 238.032 726.356 239.344 725.513 241.077C724.68 242.81 724.263 244.936 724.263 247.455C724.263 249.973 724.68 252.099 725.513 253.832C726.356 255.565 727.488 256.877 728.908 257.767C730.338 258.657 731.934 259.102 733.695 259.102C735.457 259.102 737.048 258.657 738.468 257.767C739.898 256.877 741.03 255.565 741.863 253.832C742.706 252.099 743.127 249.973 743.127 247.455ZM752.459 262V232.909H762.289C764.571 232.909 766.437 233.321 767.886 234.145C769.344 234.959 770.423 236.062 771.124 237.455C771.825 238.847 772.175 240.4 772.175 242.114C772.175 243.828 771.825 245.385 771.124 246.787C770.433 248.188 769.363 249.306 767.914 250.139C766.465 250.963 764.609 251.375 762.346 251.375H755.3V248.25H762.232C763.795 248.25 765.049 247.98 765.996 247.44C766.943 246.901 767.63 246.171 768.056 245.253C768.492 244.325 768.709 243.278 768.709 242.114C768.709 240.949 768.492 239.907 768.056 238.989C767.63 238.07 766.939 237.35 765.982 236.83C765.026 236.299 763.757 236.034 762.175 236.034H755.982V262H752.459ZM777.85 262V232.909H795.407V236.034H781.373V245.864H794.498V248.989H781.373V258.875H795.634V262H777.85ZM801.756 262V232.909H811.586C813.859 232.909 815.724 233.297 817.182 234.074C818.641 234.841 819.72 235.897 820.421 237.241C821.122 238.586 821.472 240.116 821.472 241.83C821.472 243.544 821.122 245.063 820.421 246.389C819.72 247.715 818.646 248.757 817.197 249.514C815.748 250.262 813.896 250.636 811.643 250.636H803.688V247.455H811.529C813.082 247.455 814.332 247.227 815.279 246.773C816.235 246.318 816.927 245.674 817.353 244.841C817.789 243.998 818.006 242.994 818.006 241.83C818.006 240.665 817.789 239.647 817.353 238.776C816.917 237.904 816.221 237.232 815.265 236.759C814.308 236.276 813.044 236.034 811.472 236.034H805.279V262H801.756ZM815.449 248.932L822.609 262H818.518L811.472 248.932H815.449Z"
            fill="#FFD700"
        />
    </svg>
);

export { Logo };
