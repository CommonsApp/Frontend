import React from 'react';
import Icon from '../Icon';

/*eslint-disable */
const leaflet = props => (
  <Icon viewBox="0 0 512.001 512.001" {...props}>
    <g>
      <path d="M475.776 424.921l-53.827-228.789V43.097a8.831 8.831 0 0 0-8.832-8.832h-29.25l-6.458-27.453c-1.116-4.749-5.872-7.69-10.621-6.575L222.153 34.264H80.29a8.832 8.832 0 0 0-8.832 8.832v26.622l-28.66 6.743a8.832 8.832 0 0 0-6.575 10.62l35.235 149.765v235.772a8.831 8.831 0 0 0 8.832 8.832h48.716l5.586 23.74a8.835 8.835 0 0 0 10.621 6.575l128.852-30.315h139.053a8.832 8.832 0 0 0 8.832-8.832v-25.96l47.252-11.117c4.747-1.117 7.69-5.872 6.574-10.62zM404.285 51.929v69.12l-16.262-69.12h16.262zm-315.163 0h57.947L89.122 65.563V51.929zm0 411.858V311.93l35.727 151.857H89.122zm315.163 0h-55.138l55.138-12.972v12.972zm-254.522 28.761L55.441 91.633l306.795-72.179 94.323 400.914-306.796 72.18z"
      />
      <path d="M209.688 233.922l-8.294-35.251c-2.647-11.252-9.518-20.801-19.348-26.886a43.975 43.975 0 0 0-5.859-3.042 45.874 45.874 0 0 0 3.461-4.835c6.339-10.241 8.312-22.338 5.554-34.061-5.694-24.202-30.012-39.259-54.219-33.566-11.723 2.758-21.672 9.917-28.013 20.158-6.339 10.241-8.312 22.338-5.554 34.062 3.339 14.191 13.082 25.233 25.449 30.797-8.644 10.133-12.535 24.098-9.258 38.026l8.294 35.251a8.837 8.837 0 0 0 8.59 6.812c.67 0 1.35-.077 2.031-.237l70.589-16.607a8.832 8.832 0 0 0 6.577-10.621zm-95.075-87.467c-1.678-7.131-.478-14.489 3.378-20.717 3.856-6.229 9.908-10.583 17.039-12.26a27.4 27.4 0 0 1 6.282-.732c12.436 0 23.727 8.532 26.696 21.148 1.678 7.131.478 14.489-3.378 20.717-3.856 6.227-9.906 10.581-17.036 12.26l-.008.002c-14.727 3.458-29.511-5.699-32.973-20.418zm22.462 95.477l-6.271-26.653c-3.234-13.748 5.319-27.563 19.066-30.797l3.532-.831a25.802 25.802 0 0 1 5.913-.69c4.705 0 9.332 1.306 13.432 3.845 5.816 3.601 9.884 9.252 11.45 15.911l6.271 26.654-53.393 12.561zM297.76 415.227c-1.119-4.748-5.874-7.689-10.621-6.575L179.445 433.99c-4.748 1.116-7.691 5.872-6.575 10.62a8.836 8.836 0 0 0 8.59 6.812c.67 0 1.35-.077 2.031-.237l107.695-25.337a8.832 8.832 0 0 0 6.574-10.621zM405.455 349.299c-1.119-4.749-5.882-7.69-10.621-6.575l-224.44 52.803a8.834 8.834 0 0 0 2.015 17.432c.67 0 1.351-.077 2.031-.237l224.44-52.803a8.832 8.832 0 0 0 6.575-10.62zM396.406 310.836c-1.118-4.748-5.88-7.69-10.621-6.575l-224.44 52.803a8.834 8.834 0 0 0 2.015 17.432c.67 0 1.351-.077 2.031-.237l224.44-52.803a8.832 8.832 0 0 0 6.575-10.62zM387.358 272.374c-1.118-4.75-5.88-7.689-10.621-6.575l-224.44 52.803a8.834 8.834 0 0 0 2.015 17.432c.67 0 1.351-.077 2.031-.237l224.44-52.803a8.832 8.832 0 0 0 6.575-10.62zM378.308 233.912c-1.116-4.749-5.88-7.691-10.621-6.575l-224.44 52.803a8.834 8.834 0 0 0 2.015 17.431c.67 0 1.351-.077 2.031-.237l224.44-52.803c4.748-1.116 7.691-5.871 6.575-10.619zM364.327 174.484a8.834 8.834 0 0 0-10.621-6.575l-118.555 27.893c-4.748 1.116-7.691 5.872-6.575 10.62a8.836 8.836 0 0 0 8.59 6.812c.67 0 1.35-.077 2.031-.237l118.555-27.893a8.833 8.833 0 0 0 6.575-10.62zM355.278 136.023c-1.116-4.749-5.871-7.692-10.621-6.575L226.102 157.34c-4.748 1.116-7.691 5.872-6.575 10.62a8.836 8.836 0 0 0 8.59 6.812c.67 0 1.35-.077 2.031-.237l118.555-27.893c4.748-1.116 7.691-5.871 6.575-10.619zM276.953 95.393c-1.116-4.749-5.871-7.689-10.621-6.575l-53.395 12.562a8.834 8.834 0 0 0-6.575 10.62c.956 4.069 4.583 6.812 8.59 6.812.67 0 1.35-.077 2.031-.237l53.395-12.562a8.834 8.834 0 0 0 6.575-10.62z"
      />
    </g>
  </Icon>
);
/*eslint-enable */

export default leaflet;