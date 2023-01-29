from rest_framework.serializers import ModelSerializer
from .models import Amenity, Room
from users.serializers import TinyUserSerializer
from categories.serializers import CategorySerializer
from rest_framework import serializers
from reviews.serializers import ReviewSerializer
from medias.serializers import PhotoSerializer
from wishlists.models import Wishlist


class AmenitySerializer(ModelSerializer):
    class Meta:
        model = Amenity
        fields = (
            "name",
            "description",
        )

class RoomListSerializer(ModelSerializer):    
    
    rating = serializers.SerializerMethodField()    
    is_owner = serializers.SerializerMethodField()
    photos = PhotoSerializer(many=True, read_only=True)

    
    class Meta:
        model = Room
        fields = (
            "pk",
            "name",
            "country",
            "city",
            "price",
            "rating",
            "is_owner",
            "photos",                    
        )

    def get_rating(self, room):
        return room.rating()

    def get_is_owner(self, room):
        request = self.context["request"]
        return room.owner == request.user        
        
        
class RoomDetailSerializer(ModelSerializer):
    owner = TinyUserSerializer(read_only = True)
    # amenities = AmenitySerializer(read_only = True, many=True)
    
    amenities = AmenitySerializer(
        read_only=True,
        many=True,
    )    
    
    category = CategorySerializer(read_only = True)
    rating = serializers.SerializerMethodField()    
    is_owner = serializers.SerializerMethodField()       
    is_liked = serializers.SerializerMethodField()
    photos = PhotoSerializer(many=True, read_only=True)    
    
    
    class Meta:
        model = Room
        fields = "__all__"
    def create(self, validated_data): # create 함수 오버라이팅
        print(validated_data) # owner 넘긴거 확인 가능
        return Room.objects.create(**validated_data)

    def get_rating(self, room):
        # print(self.context)        
        return room.rating()
    
    def get_is_owner(self, room):
        request = self.context['request']
        return room.owner == request.user

    def get_is_liked(self, room):
        request = self.context["request"]
        return Wishlist.objects.filter(
            user=request.user,
            rooms__pk=room.pk,
        ).exists()    
    