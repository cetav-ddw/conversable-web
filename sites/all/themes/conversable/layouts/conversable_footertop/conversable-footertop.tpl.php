<?php
/**
 * @file
 * Template for One page panel layout.
 *
 * This template provides a homepage for CONVERSABLE panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['main']: Content in the left above section.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="l-group">
    <div class="group"><?php print $content['main']; ?></div>
  </div>
</div>
