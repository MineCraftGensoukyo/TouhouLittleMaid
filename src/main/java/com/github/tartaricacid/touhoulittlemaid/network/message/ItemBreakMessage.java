package com.github.tartaricacid.touhoulittlemaid.network.message;

import net.minecraft.client.Minecraft;
import net.minecraft.entity.Entity;
import net.minecraft.entity.LivingEntity;
import net.minecraft.item.ItemStack;
import net.minecraft.network.PacketBuffer;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;
import net.minecraftforge.fml.network.NetworkEvent;

import java.util.function.Supplier;

public class ItemBreakMessage {
    private final int id;
    private final ItemStack item;

    public ItemBreakMessage(int id, ItemStack item) {
        this.id = id;
        this.item = item;
    }

    public static void encode(ItemBreakMessage message, PacketBuffer buf) {
        buf.writeInt(message.id);
        buf.writeItem(message.item);
    }

    public static ItemBreakMessage decode(PacketBuffer buf) {
        return new ItemBreakMessage(buf.readInt(), buf.readItem());
    }

    public static void handle(ItemBreakMessage message, Supplier<NetworkEvent.Context> contextSupplier) {
        NetworkEvent.Context context = contextSupplier.get();
        if (context.getDirection().getReceptionSide().isClient()) {
            context.enqueueWork(() -> handleBreakItem(message));
        }
        context.setPacketHandled(true);
    }

    @OnlyIn(Dist.CLIENT)
    private static void handleBreakItem(ItemBreakMessage message) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.level == null) {
            return;
        }
        Entity e = mc.level.getEntity(message.id);
        if (e instanceof LivingEntity && e.isAlive()) {
            ((LivingEntity) e).breakItem(message.item);
        }
    }
}
