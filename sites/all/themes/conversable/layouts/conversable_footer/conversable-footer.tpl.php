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
*   $content['top']: Content in the top.
 *   $content['left_below']: Content in the left above section.
 *   $content['right_below']: Content in the right above section.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="">
    <div class="l-group section-wrap"><?php print $content['tope']; ?></div>
    <div class="l-group section-wrap"><?php print $content['left_below']; ?></div>
    <div class="l-group section-wrap"><?php print $content['right_below']; ?></div>
  </div>
</div>
