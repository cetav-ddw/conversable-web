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
 *   $content['left_above']: Content in the left above section.
 *   $content['right_above']: Content in the right above section.
 *   $content['main']: Content in the main section.
 *   $content['bottom']: Content in the bottom.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="">
    <div class="l-group bg-pattern-turquoise"><?php print $content['top']; ?></div>
    <div class="l-group section-wrap"><?php print $content['left_above']; ?></div>
    <div class="l-group section-wrap"><?php print $content['right_above']; ?></div>
    <div class="l-group section-wrap"><?php print $content['main']; ?></div>
    <div class="l-group section-wrap"><?php print $content['bottom']; ?></div>
  </div>
</div>
