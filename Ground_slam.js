//});

/*events.blockRightClick ( function (event) {
	echo ( event.player, "you broke a block" );
});

events.entityRightClick ( function (event) {
	echo ( event.player, "you broke a block" );
});
*/


events.blockRightClick ( function (event) {
	var EXPLOSIVE_YIELD = 10;
	var loc = event.blockClicked.location;
	event.player.world.makeExplosion( event.player, loc, EXPLOSIVE_YIELD, true);

});
	
/*public ItemStack onItemRightClick(ItemStack itemstack, World world, EntityPlayer entityplayer)

{
world.playSoundAtEntity(entityplayer, "random.bow", 1.0F, 1.0F / (itemRand.nextFloat() * 0.4F + 0.8F));

EntityArrow ea = new EntityArrow(world, entityplayer);
world.entityJoinedWorld(ea);

}
return itemstack;
}

public EntityArrow(World world, EntityLiving entityliving)
    {
        super(world);
        xTile = -1;
        yTile = -1;
        zTile = -1;
        inTile = 0;
        field_28019_h = 0;
        inGround = false;
        doesArrowBelongToPlayer = false;
        arrowShake = 0;
        ticksInAir = 0;
        owner = entityliving;
        doesArrowBelongToPlayer = entityliving instanceof EntityPlayer;
        setSize(0.5F, 0.5F);
        
        setLocationAndAngles(entityliving.posX, entityliving.posY + (double)entityliving.getEyeHeight(), entityliving.posZ, entityliving.rotationYaw, entityliving.rotationPitch);
        posX -= MathHelper.cos((rotationYaw / 180F) * 3.141593F) * 0.16F;
        posY -= 0.10000000149011612D;
        posZ -= MathHelper.sin((rotationYaw / 180F) * 3.141593F) * 0.16F;
        setPosition(posX, posY, posZ);
        yOffset = 0.0F;
        motionX = -MathHelper.sin((rotationYaw / 180F) * 3.141593F) * MathHelper.cos((rotationPitch / 180F) * 3.141593F);
        motionZ = MathHelper.cos((rotationYaw / 180F) * 3.141593F) * MathHelper.cos((rotationPitch / 180F) * 3.141593F);
        motionY = -MathHelper.sin((rotationPitch / 180F) * 3.141593F);
        setArrowHeading(motionX, motionY, motionZ, 1.5F, 1.0F);
    }
*/
